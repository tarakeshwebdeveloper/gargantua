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

    "use strict";

    var Controller = Controller.extend({

        init: function () {
            
            return this;
        },

       
        events: function (args) {
            var self = this;

            //self.listenTo(self,"shell:test", function(args){console.log("shell trigger success")});
            return this;
        },

        shell: function () {
            var self = this,
                view = new ShellView({ controller : self, el: Constants.SIDEBAR });
                view.clear().render();
        }
    });

    return Controller;

});
