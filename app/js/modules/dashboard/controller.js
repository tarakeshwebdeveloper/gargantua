define([
	"apiConfig",
    "constantsConfig",
	"core/controller",
	"modules/dashboard/views/dashboardView"
], function (
	Config,
    Constants,
	Controller,
	DashboardView
) {

    "use strict";

    var Controller = Controller.extend({

        init: function () {
            
            return this;
        },

       
        events: function (args) {

            return this;
        },

        dashboard: function () {
            var self = this,
                view = new DashboardView({ controller : self, el: Constants.CONTENT });
                view.clear().render();
        }
    });

    return Controller;

});
