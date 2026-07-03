sap.ui.define([
    "sap/ui/core/UIComponent",
    "project1/model/models"
], function (UIComponent, models) {

    "use strict";

    return UIComponent.extend("project1.Component", {

        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init: function () {

            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(
                models.createDeviceModel(),
                "device"
            );

            this.getRouter().initialize();

        }

    });

});