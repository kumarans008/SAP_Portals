sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/XMLView"
], function (Controller, XMLView) {

    "use strict";

    return Controller.extend("project1.controller.Main", {

        onInit: function () {

            this.loadView("Dashboard");

        },

        loadView: function (sViewName) {

            var oContainer =
                this.byId("contentArea");

            oContainer.removeAllPages();

            XMLView.create({
                viewName: "project1.view." + sViewName
            }).then(function (oView) {

                oContainer.addPage(oView);

                oContainer.to(oView);

            });

        },

        onDashboardPress: function () {

            this.loadView("Dashboard");

        },

        onIncidentPress: function () {

            this.loadView("Incident");

        },

        onRiskPress: function () {

            this.loadView("Risk");

        },

        onActionPress: function () {

            this.loadView("Action");

        },

        onLogout: function () {

            location.reload();

        }

    });

});