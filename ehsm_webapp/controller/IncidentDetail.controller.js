sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.IncidentDetail", {

        onInit: function () {

            var oRouter = this.getOwnerComponent().getRouter();

            oRouter.getRoute("IncidentDetail")
                .attachPatternMatched(this._onObjectMatched, this);

        },

        _onObjectMatched: function (oEvent) {

            var sNotificationNo =
                oEvent.getParameter("arguments").id;

            var sPath =
                "/IncidentSet('" + sNotificationNo + "')";

            this.getView().bindElement({
                path: sPath
            });

        },

        onBack: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("Incident");

        }

    });

});