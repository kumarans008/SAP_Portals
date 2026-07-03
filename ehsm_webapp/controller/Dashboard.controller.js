sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
    "use strict";

    return Controller.extend("project1.controller.Dashboard", {

        onInit: function () {

            var oModel = this.getOwnerComponent().getModel();

            oModel.read("/DashboardSet('1')", {

                success: function (oData) {

                    var oJsonModel = new JSONModel(oData);

                    this.getView().setModel(oJsonModel);

                }.bind(this),

                error: function () {

                    MessageBox.error("Failed to load dashboard");

                }

            });

        },

        onIncidentPress: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("Incident");

        },

        onRiskPress: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("Risk");

        },
        onActionPress: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("Action");

        }

    });

});