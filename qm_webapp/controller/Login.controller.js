sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.qm.portal.qmportal.controller.Login", {

        onLogin: function () {

            var sUserId = this.byId("userId").getValue();
            var sPassword = this.byId("password").getValue();

            if (sUserId === "K902080" && sPassword === "1234") {

                MessageBox.success("Login Successful", {

    onClose: function () {

        this.getOwnerComponent()
            .getRouter()
            .navTo("RouteDashboard");

    }.bind(this)

});

            } else {

                MessageBox.error("Invalid Credentials");

            }

        }

    });

});