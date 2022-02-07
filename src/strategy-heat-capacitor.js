"use strict";
const { DateTime } = require("luxon");
const { validateInput } = require("./handle-input");
const { runBuySellAlgorithm, findTemp } = require("./strategy-heat-capacitor-functions");
const { version } = require("../package.json");

module.exports = function (RED) {
  function TempMan(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    node.timeHeat1C = Number(config.timeHeat1C);
    node.timeCool1C = Number(config.timeCool1C);
    node.setpoint = Number(config.setpoint);
    node.maxTempAdjustment = Number(config.maxTempAdjustment);
    node.boostTempHeat = Number(config.boostTempHeat);
    node.boostTempCool = Number(config.boostTempCool);
    node.minSavings = Number(config.minSavings);
    // sanitise disabled output as this is used when all else fails
    if (isNaN(node.disabled_op)) {
      node.disabled_op = 0;
    }

    node.on("close", function () {
      clearTimeout(node.schedulingTimeout);
    });

    this.on("input", function (msg) {
      if (validateInput(node, msg)) {
        // Using msg.payload.config to change specific properties
        if (msg.hasOwnProperty("payload")) {
          if (msg.payload.hasOwnProperty("config")) {
            if (msg.payload.config.hasOwnProperty("timeHeat1C"))
              node.timeHeat1C = Number(msg.payload.config.timeHeat1C);
            if (msg.payload.config.hasOwnProperty("timeCool1C"))
              node.timeCool1C = Number(msg.payload.config.timeCool1C);
            if (msg.payload.config.hasOwnProperty("setpoint")) node.setpoint = Number(msg.payload.config.setpoint);
            if (msg.payload.config.hasOwnProperty("maxTempAdjustment"))
              node.maxTempAdjustment = Number(msg.payload.config.maxTempAdjustment);
            if (msg.payload.config.hasOwnProperty("boostTempHeat"))
              node.boostTempHeat = Number(msg.payload.config.boostTempHeat);
            if (msg.payload.config.hasOwnProperty("boostTempCool"))
              node.boostTempCool = Number(msg.payload.config.boostTempCool);
            if (msg.payload.config.hasOwnProperty("minSavings"))
              node.minSavings = Number(msg.payload.config.minSavings);
          }

          //merge pricedata to escape some midnight issues. Store max 72 hour history
          if (msg.payload.hasOwnProperty("priceData")) {
            if (node.hasOwnProperty("priceData")) {
              node.priceData = mergePriceData(node.priceData, msg.payload.priceData);
              if (node.priceData.length > 72) node.priceData = node.priceData.slice(-72);
            } else {
              node.priceData = msg.payload.priceData;
            }
          }

          if (node.hasOwnProperty("priceData")) {
            node.schedule = runBuySellAlgorithm(
              node.priceData,
              node.timeHeat1C,
              node.timeCool1C,
              node.boostTempHeat,
              node.boostTempCool,
              node.maxTempAdjustment,
              node.minSavings
            );

            if (msg.payload.hasOwnProperty("time")) {
              node.dT = findTemp(msg.payload.time, node.schedule);
            } else {
              node.dT = findTemp(DateTime.now(), node.schedule);
            }

            node.T = node.setpoint + node.dT;

            //Add config to statistics
            node.schedule.config = {
              timeHeat1C: node.timeHeat1C,
              timeCool1C: node.timeCool1C,
              setpoint: node.setpoint,
              maxTempAdjustment: node.maxTempAdjustment,
              boostTempHeat: node.boostTempHeat,
              boostTempCool: node.boostTempCool,
              minSavings: node.minSavings,
            };

            node.schedule.priceData = node.priceData;
            node.schedule.time = DateTime.now().toISO();
            node.schedule.version = version;

            // Send output
            node.send([
              { payload: node.T, topic: "setpoint", time: node.schedule.time, version: version },
              { payload: node.dT, topic: "adjustment", time: node.schedule.time, version: version },
              { payload: node.schedule },
            ]);
          }
        }
      }
    });
  }

  RED.nodes.registerType("ps-strategy-heat-capacitor", TempMan);
};

function mergePriceData(priceDataA, priceDataB) {
  const tempDict = {};
  priceDataA.forEach((e) => {
    tempDict[e.start] = e.value;
  });
  priceDataB.forEach((e) => {
    tempDict[e.start] = e.value;
  });

  var keys = Object.keys(tempDict);
  keys.sort();

  const res = Array(keys.length);
  for (let i = 0; i < res.length; i++) {
    res[i] = { value: tempDict[keys[i]], start: keys[i] };
  }

  return res;
}
