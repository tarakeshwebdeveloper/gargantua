define([
    "apiConfig",
    "viewBase",
    "text!modules/dashboard/templates/_welcome.html"],
    function (Config, Base, WelcomeTpl) {

        var View = Base.extend({
            initialize: function () {
                
                
            },
            render: function () {
                var self = this;
                self.$el.append(WelcomeTpl);
            }
        });

        return View;

    });