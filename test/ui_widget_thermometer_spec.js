const should = require("should");
const helper = require("node-red-node-test-helper");
const nodeUiWidgetThermometer = require("../nodes/ui_widget_thermometer.js");

helper.init(require.resolve('node-red'));

describe('UI Widget Temperature', function () {

    beforeEach((done) => {
        helper.startServer(done);
    });

    afterEach((done) => {
        helper.unload();
        helper.stopServer(done);
    });

    it('should be loaded', (done) => {
        const flow = [
            {
                id: "n1",
                type: "ui_widget_thermometer",
                name: "ui_widget_thermometer",
                group: "fe8c8f98cc2d3635",
                width: 0,
                height: 0,
                title: "Kitchen Temperature",
                colorTop: "#2196f3",
                colorMiddle: "#8bc34a",
                colorBottom: "#f44336",
                unit: "°C",
                scale: "small",
                minTemp: 0,
                maxTemp: 100,
                x: 600,
                y: 100
            }
        ];
        helper.load(nodeUiWidgetThermometer, flow, () => {
            const n1 = helper.getNode("n1");
            try {
                n1.should.have.property("name", "ui_widget_thermometer");
                done();
            } catch (err) {
                done(err);
            }
        });
    });
});