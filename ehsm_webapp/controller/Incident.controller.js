sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {

    "use strict";

    return Controller.extend("project1.controller.Incident", {

        onBack: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("Dashboard");

        },

        onIncidentSelect: function (oEvent) {

            var oItem = oEvent.getParameter("listItem");

            var oContext = oItem.getBindingContext();

            var sNotificationNo =
                oContext.getProperty("NotificationNo");

            this.getOwnerComponent()
                .getRouter()
                .navTo("IncidentDetail", {
                    id: sNotificationNo
                });

        },

        onSearch: function (oEvent) {

            var sValue =
                oEvent.getParameter("newValue");

            var oTable =
                this.byId("incidentTable");

            var oBinding =
                oTable.getBinding("items");

            if (!sValue) {

                oBinding.filter([]);
                return;

            }

            var oFilter = new Filter({

                filters: [

                    new Filter(
                        "NotificationNo",
                        FilterOperator.Contains,
                        sValue
                    ),

                    new Filter(
                        "Description",
                        FilterOperator.Contains,
                        sValue
                    ),

                    new Filter(
                        "Plant",
                        FilterOperator.Contains,
                        sValue
                    ),

                    new Filter(
                        "Priority",
                        FilterOperator.Contains,
                        sValue
                    )

                ],

                and: false

            });

            oBinding.filter([oFilter]);

        }

    });

});