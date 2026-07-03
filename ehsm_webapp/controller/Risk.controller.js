sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.Risk", {

        onBack: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("Dashboard");

        },

        removeLeadingZeros: function (sValue) {

            if (!sValue) {
                return "";
            }

            return sValue.replace(/^0+/, "");

        }

    });

});