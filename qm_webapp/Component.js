sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/qm/portal/qmportal/model/models"
], (UIComponent, models) => {

    "use strict";

    return UIComponent.extend(
        "com.qm.portal.qmportal.Component",
        {

            metadata: {
                manifest: "json"
            },

            init() {

                UIComponent.prototype.init.apply(this, arguments);

                this.setModel(
                    models.createDeviceModel(),
                    "device"
                );

                this.getRouter().initialize();

            }

        }
    );

});