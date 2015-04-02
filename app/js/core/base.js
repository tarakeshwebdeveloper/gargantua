define([
    'backbone',
    'chain'
], function(Backbone){
    "use strict";
    var Base = function(options){
        options || (options = {});
        this.options = options;
        this.initialize.apply(this, arguments);
    };

    _.extend(Base.prototype, Backbone.Events, {
        initialize: function(){}
    });

    Base.extend = Chain.Base.extend;

    return Base;

});
