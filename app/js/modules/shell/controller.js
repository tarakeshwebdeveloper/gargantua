define([
	"apiConfig",
    "constantsConfig",
	"core/controller",
	"modules/shell/views/shellView"
], function (
	Config,
    Constants,
	Controller,
	ShellView
) {

    var Controller = Controller.extend({

        init: function () {
            
            return this;
        },

       
        events: function (args) {
           
            return this;
        },

        shell: function () {
            var self = this,
                view = new ShellView({ el: Constants.SIDEBAR });
            view.clear(self).render();
        }
    });

    return Controller;

});
