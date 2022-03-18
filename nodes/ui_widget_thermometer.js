module.exports = function (RED) {
    function HTML(config) {
        let heightValue = "250";
        let clsSmall = "";
        let displayName = "";
        let gapTitle = "10";
        if (config.scale === 'small') {
            heightValue = '150';
            clsSmall = 'small';
            gapTitle = "0";
        }
        if (config.title !== "") {
            displayName = "<div style='font-size: 1.2em;font-weight:bold;text-align: center;margin-top: " + gapTitle + "px'>" + config.title + "</div>";
        }
        const html = String.raw`<style>
.tg-thermometer {
    font-family: "Roboto", sans-serif;
    font-size: 12px
    width: 100px;
    position: relative;
    margin: auto;
}
.tg-thermometer.small .meter {
    width: 6px
}
.tg-thermometer.small .meter .mask {
    width: 6px
}
.tg-thermometer.small .meter .bg-color {
    height: calc(120px - 57px)
}
.tg-thermometer.small .draw-a {
    width: 20px
}
.tg-thermometer.small .draw-a:after {
    width: 32px;
    height: 32px;
    left: -6px;
    bottom: -10px
}
.tg-thermometer.small .draw-b:before {
    width: 6px
}
.tg-thermometer.small .draw-b:after {
    width: 14px;
    height: 14px
}
.tg-thermometer.small .percent-b,
.tg-thermometer.small .percent-d {
    display: none
}
.tg-thermometer .statistics {
    position: absolute;
    left: 0;
    z-index: 1;
    font-size: 0.8em;
    top: 0;
    height: 100%;
    font-style: italic;
    font-weight: 500;
    text-shadow: 1px 1px #fff
}
.tg-thermometer .statistics .percent {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    text-align: right;
    position: absolute;
    width: 55px
}
.tg-thermometer .statistics .percent.percent-a {
    bottom: calc(100% - 2px)
}
.tg-thermometer .statistics .percent.percent-b {
    bottom: calc(75% - 2px)
}
.tg-thermometer .statistics .percent.percent-c {
    bottom: calc(50% - 2px)
}
.tg-thermometer .statistics .percent.percent-d {
    bottom: calc(25% - 2px)
}
.tg-thermometer .statistics .percent.percent-e {
    bottom: calc(0% - 2px)
}
.tg-thermometer .meter {
    width: 10px;
    margin: auto;
    left: 0;
    right: 0;
    height: calc(100% - 58px);
    top: 12px;
    position: absolute;
    background-color: #d6d6d6;
    border-radius: 10px 10px 0 0;
    z-index: 1
}
.tg-thermometer .meter .mercury {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ` + config.colorBottom + `;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(0deg, ` + config.colorBottom + `, #3f51b5);
    transition: all .5s ease-in-out;
    height: 0
}
.tg-thermometer .meter .mask {
    position: absolute;
    bottom: 0;
    overflow: hidden;
    width: 10px;
    height: 100%;
    border-radius: 10px 10px 0 0
}
.tg-thermometer .meter .bg-color {
    position: absolute;
    width: 10px;
    height: calc(200px - 57px);
    background: linear-gradient(` + config.colorTop + `, ` + config.colorMiddle + `, ` + config.colorBottom + `);
    bottom: 0
}
.tg-thermometer .meter .percent-current {
    position: absolute;
    left: 0;
    top: 4px;
    transform: translateX(calc(-100% - 8px)) translateY(-50%);
    background-color: #fff;
    padding: 5px 10px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 3px 3px 6px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    font-weight: 500;
    font-size: 1.2em;
    color: #333
}
.tg-thermometer .meter .percent-current:after {
    border-left: 8px solid white;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    transform: translateX(calc(100% - 2px));
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 0
}
.tg-thermometer .meter .percent-current:before {
    border-left: 7px solid rgba(0, 0, 0, 0.2);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    transform: translateX(calc(100% - 0px));
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 0
}
.tg-thermometer .draw-a {
    background-color: #fff;
    height: calc(100% - 20px);
    width: 30px;
    margin: auto;
    position: relative;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 1px 1px 5px rgba(0, 0, 0, 0.2)
}
.tg-thermometer .draw-a:before {
    width: 100%;
    bottom: 0px;
    left: 0;
    position: absolute;
    height: 50px;
    background-color: #fff;
    content: "";
    z-index: 1
}
.tg-thermometer .draw-a:after {
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
    background-color: #fff;
    left: -10px;
    bottom: -20px;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 1px 1px 5px rgba(0, 0, 0, 0.2)
}
.tg-thermometer .draw-b {
    position: absolute;
    width: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 50px;
    z-index: 1
}
.tg-thermometer .draw-b:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 24px;
    height: 24px;
    background-color: ` + config.colorBottom + `;
    content: "";
    border-radius: 50%
}
.tg-thermometer .draw-b:before {
    position: absolute;
    left: 0;
    right: 0;
    width: 10px;
    top: 0;
    margin: auto;
    height: 20px;
    background-color: ` + config.colorBottom + `;
    content: "";
    border-radius: 10px 10px 0 0
}
.centered {
    position: absolute !important;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center
}
</style>
<div>
    <div style="height: ` + heightValue + `px;" class="tg-thermometer ` + clsSmall + `">
        <div class="draw-a"></div>
        <div class="draw-b"></div>
        <div class="meter">
            <div class="statistics">
                <div class="percent percent-a">` + config.maxTemp + config.unit + `</div>
                <div class="percent percent-b">75%</div>
                <div class="percent percent-d">25%</div>
                <div class="percent percent-c">50%</div>
                <div class="percent percent-e">` + config.minTemp + config.unit + `</div>
            </div>
            <div style="height: 20%" class="mercury" id="item_{{$id}}">
                <div class="percent-current">20%</div>
                <div class="mask">
                    <div class="bg-color" style="height: calc(` + heightValue + `px - 57px);"></div>
                </div>
            </div>
        </div>
    </div>
</div>` + displayName;
        return html;
    }
    /**
     * REQUIRED
     * A ui-node must always contain the following function.
     * This function will verify that the configuration is valid
     * by making sure the node is part of a group. If it is not,
     * it will throw a "no-group" error.
     * You must enter your node name that you are registering here.
     */
    function checkConfig(node, conf) {
        if (!conf || !conf.hasOwnProperty("group")) {
            node.error(RED._("ui_widget_thermometer.error.no-group"));
            return false;
        }
        return true;
    }

    let ui = undefined; // instantiate a ui variable to link to the dashboard

    /**
     * REQUIRED
     * A ui-node must always contain the following function.
     * function YourNodeNameHere(config){}
     * This function will set the needed variables with the parameters from the flow editor.
     * It also will contain any Javascript needed for your node to function.
     *
     */
    function UiWidgetThermometer(config) {
        let node = this;
        let done = null;
        try {
            if (ui === undefined) {
                ui = RED.require("node-red-dashboard")(RED);
            }
            RED.nodes.createNode(this, config);

            // placing a "debugger;" in the code will cause the code to pause its execution in the web browser
            // this allows the user to inspect the variable values and see how the code is executing
            //debugger;

            if (checkConfig(node, config)) {
                const html = HTML(config);                    // *REQUIRED* get the HTML for this node using the function from above
                done = ui.addWidget({                       // *REQUIRED* add our widget to the ui dashboard using the following configuration
                    node: node,                             // *REQUIRED*
                    order: config.order,                    // *REQUIRED* placeholder for position in page
                    group: config.group,                    // *REQUIRED*
                    width: config.width,                    // *REQUIRED*
                    height: config.height,                  // *REQUIRED*
                    format: html,                           // *REQUIRED*
                    templateScope: "local",                 // *REQUIRED*
                    emitOnlyNewValues: false,               // *REQUIRED*
                    forwardInputMessages: false,            // *REQUIRED*
                    storeFrontEndInputAsState: false,       // *REQUIRED*
                    convertBack: function (value) {
                        return value;
                    },
                    beforeEmit: function (msg) {
                        msg.unit = config.unit;
                        return {
                            msg: msg
                        };
                    },
                    beforeSend: function (msg, orig) {
                        if (orig) {
                            return orig.msg;
                        }
                    },
                    initController: function ($scope) {
                        $scope.flag = true;     // not sure if this is needed?
                        $scope.$watch('msg', function (msg) {
                            if (!msg) {
                                // Ignore undefined msg
                                return;
                            }
                            const payload = msg.payload;
                            const mercury = document.getElementById("item_" + $scope.$eval('$id'));
                            $(mercury).css("height", payload + "%");
                            $(mercury).children(".percent-current").text(payload + msg.unit);
                        });
                    }
                });
            }
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.warn(e);		// catch any errors that may occur and display them in the web browsers console
        }

        /**
         * REQUIRED
         * I'm not sure what this does, but it is needed.
         */
        node.on("close", function () {
            if (done) {
                done();
            }
        });
    }

    RED.nodes.registerType("ui_widget_thermometer", UiWidgetThermometer);
};