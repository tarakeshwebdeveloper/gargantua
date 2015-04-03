define(["jquery", "backbone"], function ($, Backbone) {

    "use strict";


    var View = Backbone.View.extend({

        clear: function () {
            var self = this;
            self.undelegateEvents();
            self.$el.unbind();
            self.delegateEvents();
            return this;
        }
    });

    return View;

});

