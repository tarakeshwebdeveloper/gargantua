define([
    "apiConfig",
    "viewBase",
    "text!modules/dashboard/templates/_welcome.html"],

    function (Config, Base, WelcomeTpl) {

        "use strict";

        var View = Base.extend({

            initialize: function (options) {
                
                
            },

            render: function () {
                var self = this;
                self.$el.append(WelcomeTpl);
            }
        });

        return View;

    });