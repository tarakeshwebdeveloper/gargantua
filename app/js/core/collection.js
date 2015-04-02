define(['backbone','config'], function(Backbone,Config) {
    "use strict";
    var Collection = Backbone.Collection.extend({

        initialize: function(options) {
            this.url = (options != undefined) ? options.url : null;
        }

    });

    return Collection;

});
