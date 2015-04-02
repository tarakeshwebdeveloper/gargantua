define([
    "apiConfig",
    "viewBase",
    "modules/shell/utilities/menuUtil",
    "text!modules/shell/templates/_sidebar.html"],
    function (Config, Base, MenuUtil, SideBarTpl) {

        var View = Base.extend({
            initialize: function () {
                
                
            },
            render: function () {
                var self = this;
                self.$el.append(SideBarTpl);
                MenuUtil.init();
            }
        });

        return View;

    });