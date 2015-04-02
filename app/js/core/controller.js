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

            setup: function () {
                _.extend(this, Backbone.Events);
                return this;
            },

            executeView: function (viewName, params) {
                var self = this;

                console.log("Controller has view (" + viewName + "):" + (typeof self[viewName] != undefined));
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