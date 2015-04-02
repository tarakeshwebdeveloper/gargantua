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

    var Controller = Controller.extend({

        init: function () {
            
            return this;
        },

       
        events: function (args) {
           
            return this;
        },

        dashboard: function () {
            var self = this,
                view = new DashboardView({ el: Constants.CONTENT });
            view.clear(self).render();
        }
    });

    return Controller;

});
