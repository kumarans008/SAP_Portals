sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    "use strict";

    return Controller.extend(
        "com.qm.portal.qmportal.controller.Dashboard",
        {

            onInspectionLotsPress: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("RouteInspectionLots");

            },

            onResultRecordingPress: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("RouteResultRecording");

            },

            onUsageDecisionPress: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("RouteUsageDecision");

            },

            onLogout: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("RouteLogin");

            }

        }

    );

});