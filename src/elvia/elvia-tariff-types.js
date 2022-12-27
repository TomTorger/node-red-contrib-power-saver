const { getTariffTypes, ping } = require("./elvia-api");

module.exports = function (RED) {
  function PsElviaTariffTypesNode(config) {
    RED.nodes.createNode(this, config);
    this.elviaConfig = RED.nodes.getNode(config.elviaConfig);
    const key = this.elviaConfig.credentials.elviaSubscriptionKey;
    const node = this;
    ping(node, key);

    node.on("input", function () {
      getTariffTypes(node, key).then((json) => {
        node.send([{ payload: json }]);
      });
    });
  }

  RED.nodes.registerType("ps-elvia-tariff-types", PsElviaTariffTypesNode);
};
