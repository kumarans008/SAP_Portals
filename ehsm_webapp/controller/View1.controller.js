sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/core/UIComponent"
], function (
    Controller,
    MessageToast,
    MessageBox,
    UIComponent
) {

    "use strict";

    return Controller.extend("project1.controller.View1", {

        onLogin: function () {

            var oView = this.getView();

            var sEmpId =
                oView.byId("empIdInput").getValue();

            var sPassword =
                oView.byId("passwordInput").getValue();

            if (!sEmpId || !sPassword) {

                MessageBox.error(
                    "Please enter Employee ID and Password"
                );

                return;
            }

            var oModel =
                this.getOwnerComponent().getModel();

            var sPath =
                "/LoginSet('" + sEmpId + "')";

            var that = this;

            oModel.read(sPath, {

                success: function (oData) {

                    if (
                        oData.Password.trim() ===
                        sPassword.trim()
                    ) {

                        MessageToast.show(
                            "Login Successful"
                        );

                        UIComponent
                            .getRouterFor(that)
                            .navTo("Main");

                    } else {

                        MessageBox.error(
                            "Invalid Password"
                        );

                    }

                },

                error: function () {

                    MessageBox.error(
                        "Employee not found"
                    );

                }

            });

        }

    });

});