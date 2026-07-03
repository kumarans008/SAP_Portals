sap.ui.define([], function () {

    "use strict";

    return {

        removeLeadingZeros: function (sValue) {

            if (!sValue) {
                return "";
            }

            return sValue.replace(/^0+/, "");

        },

        formatDate: function (sDate) {

            if (!sDate) {
                return "";
            }

            return sDate.substring(6, 8) + "-"
                + sDate.substring(4, 6) + "-"
                + sDate.substring(0, 4);

        }

    };

});