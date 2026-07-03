sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {

    "use strict";

    return Controller.extend(
        "com.qm.portal.qmportal.controller.ResultRecording",
        {

            onInit: function () {

                console.log("Result Recording Loaded");

            },

            // BACK BUTTON

            onNavBack: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("RouteDashboard");

            },

            // SEARCH

            onSearch: function (oEvent) {

                var sValue = oEvent.getParameter("newValue");

                var oTable = this.byId("resultTable");

                var oBinding = oTable.getBinding("items");

                var aFilters = [];

                if (sValue) {

                    aFilters.push(

                        new Filter(
                            "InspectionLot",
                            FilterOperator.Contains,
                            sValue
                        )

                    );

                }

                oBinding.filter(aFilters);

            }

        }

    );

});