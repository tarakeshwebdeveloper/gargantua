define(["jquery", "backbone"], function ($, Backbone) {

    "use strict";

    var View = Backbone.View.extend({

        clear: function (ctrl) {
            var self = this;
            this.undelegateEvents();
            this.$el.unbind();
            this.delegateEvents();
            if (ctrl) {
                this.controller = ctrl;
            }
            return this;
        }
    });

    return View;

});

