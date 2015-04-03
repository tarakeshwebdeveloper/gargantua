define([
        "jquery",
        "backbone",
        "chain"
],

    function (
        $,
        Backbone) {

        "use strict";

        var controller = Chain.Base.extend({

            setup: function (name) {
                _.extend(this, Backbone.Events);
                this.name = name;
                return this;
            },

            executeView: function (viewName, params) {
                var self = this;

                console.log(self.name +" controller has view (" + viewName + "):" + (typeof self[viewName] != undefined));
                if (typeof self[viewName] != "undefined") {
                    delete self[viewName];
                    self[viewName].call(this, params);
                }
                else {
                    console.log(viewName + " view:Not found in the controller");
                }
            }

        }, {

            //

        });

        return controller;

    }

);