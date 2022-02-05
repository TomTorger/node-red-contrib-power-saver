"use strict";
const cloneDeep = require("lodash.clonedeep");
const { DateTime } = require("luxon");
const expect = require("expect");
const helper = require("node-red-node-test-helper");
const node = require("../src/strategy-heat-capacitor.js");
const prices = require("./data/converted-prices.json");

helper.init(require.resolve("node-red"));

describe("ps-strategy-heat-capacitor node", function () {
  beforeEach(function (done) {
    helper.startServer(done);
  });

  afterEach(function (done) {
    helper.unload().then(function () {
      helper.stopServer(done);
    });
  });

  it("should be loaded", function (done) {
    const flow = [{ id: "n1", type: "ps-strategy-heat-capacitor", name: "Temp. Adj." }];
    helper.load(node, flow, function () {
      const n1 = helper.getNode("n1");
      expect(n1).toHaveProperty("name", "Temp. Adj.");
      done();
    });
  });

  
  it("should log error when illegal data is received", function (done) {
    const flow = [{ id: "n1", type: "ps-strategy-heat-capacitor", name: "Temp. Adj." }];
    helper.load(node, flow, function () {
      const n1 = helper.getNode("n1");
      n1.receive({});
      n1.warn.should.be.calledWithExactly("No payload");
      n1.receive({ payload: "Error" });
      n1.warn.should.be.calledWithExactly("Payload is not an object");
      n1.receive({ payload: [] });
      n1.warn.should.be.calledWithExactly("Payload is missing priceData");
      n1.receive({ payload: { priceData: [] } });
      n1.warn.should.be.calledWithExactly("priceData is empty");
      n1.receive({ payload: { priceData: { today: [], tomorrow: [] } } });
      n1.warn.should.be.calledWithExactly("Illegal priceData in payload. Did you use the receive-price node?");
  
      ["start", "value"].forEach((attr) => {
        const testData1 = cloneDeep(prices);
        delete testData1.priceData[3][attr];
        n1.receive({ payload: testData1 });
        n1.warn.should.be.calledWithExactly(
          "Malformed entries in priceData. All entries must contain start and value."
        );
      });
  
      n1.receive({ payload: cloneDeep(prices) });
      n1.warn.should.not.be.called;
      done();
    });
  });

  it("should plan correctly", function (done) {
    const result = 0.5
    const flow = makeFlow();
    helper.load(node, flow, function () {
      const n1 = helper.getNode("n1");
      const n2 = helper.getNode("n2");
      const n3 = helper.getNode("n3");
      let bothRecieved = false
      n2.on("input", function (msg) {
        expect(msg).toHaveProperty("payload", 22.5);
        n1.warn.should.not.be.called;
        (bothRecieved)? done(): bothRecieved=true;
      });
      n3.on("input", function (msg) {
        expect(msg).toHaveProperty("payload", -0.5);
        n1.warn.should.not.be.called;
        (bothRecieved)? done(): bothRecieved=true;
      });
      const time = DateTime.fromISO(prices.priceData[10].start);
      n1.receive({ payload: makePayload(prices, time) });
    });
  });

});

function makeFlow() {
  return [
    {
      id: "n1",
      type: "ps-strategy-heat-capacitor",
      name: "Temp. Adj.",
      timeHeat1C: 60,
      timeCool1C: 50,
      setpoint: 23,
      maxTempAdjustment: 0.5,
      minSavings: 0.08,
      wires: [["n2"], ["n3"], ["n4"]],
    },
    { id: "n2", type: "helper" },
    { id: "n3", type: "helper" },
    { id: "n4", type: "helper" },
  ];
}

function makePayload(prices, time) {
  const payload = cloneDeep(prices);
  payload.time = time;
  let entryTime = DateTime.fromISO(payload.time);
  payload.priceData.forEach((e) => {
    e.start = entryTime.toISO();
    entryTime = entryTime.plus({ milliseconds: 10 });
  });
  return payload;
}