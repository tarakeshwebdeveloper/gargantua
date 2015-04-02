define(['backbone','config'], function(Backbone,Config) {
    "use strict";
    var Model = Backbone.Model.extend({

        initialize: function(options) {
            if(options){
                this.url = (options.url != undefined)? options.url : null;
            }

        },

		frag: function(args) {
            var f = "";
            for (var c = 0; c < args.length; c++) {
                f += args[c] + "/";
            }
            return f.substring(0, f.length - 1);
        },

        restify: function(args) {
            var f = "";
            $.each(args, function(k,v) {
                f += v + "/";
            });
            return f.substring(0, f.length - 1);
        },

        postModel: function(payload, callback) {

            this.save({ request: payload }, {

                success: function(model, data, options) {
                    if (data.response.code === 0) {
                        callback(true, data.response.model);
                    } else {
                        callback(false, data.response.message);
                    }
                },
                error: function(model, data, options) {
                    app.trigger("error", Config.ERR_API);
                }

            });

        },

        getModel: function(callback) {

            // this.fetch().done(function(obj) {
            //     if (obj.response.code === 0) {
            //         if (obj.response.model != null) {
            //             callback(true, obj.response.model);
            //         } else {
            //             callback(false, obj.response.model);
            //         }
            //     } else {
            //         app.trigger("error", Config.ERR_API);
            //     }
            // });

            this.fetch({
                success: function(model, response) {
                    callback(true, response);
                },
                error: function(e) {
                    debugger;
                    app.trigger("error", Config.ERR_API);
                }
            }); 

        },

        sync: function(method, model, options) {

            var params = {};
            switch (method) {
                case "create":
                    params = this._create(model, options);
                    break;
                case "read":
                    params = this._read(model, options);
                    break;
                case "update":
                    params = this._update(model, options);
                    break;
                case "delete":
                    params = this._delete(model, options);
                    break;
            }

            return params;
        },

        _create: function(model, options) {

            var params = _.extend({

                headers: { Accept: "application/json" },
                type: 'POST',
                contentType: "application/json",
                url: model.attributes.url,
                processData: false,
                crossDomain: true,
                withCredentials : true

            }, options);
            if(typeof options.wrapWithRequestObject != "undefined" && options.wrapWithRequestObject == false ){
                params.data = JSON.stringify(model.attributes);
            }
            else {
                var data = model.toJSON();
                delete data.url;
                params.data = JSON.stringify(data);
            }

            return $.ajax(params);
        },

        _read: function(model, options) {

            var params = _.extend({

                headers: {Accept: "*/*; charset=utf-8"},
                type: 'GET',
                dataType: "json",
                url: model.attributes.url + ((model.attributes.id) ? model.attributes.id : ""),
                processData: false,
                crossDomain: true,
                withCredentials : true

            }, options);

            return $.ajax(params);

        },

        _update: function(model, options) {
            var params = _.extend({
                headers: {Accept: "*/*; charset=utf-8"},
                type: 'PUT',
                data: this.wrap(model),
                url: model.attributes.url,
                processData: false,
                crossDomain: true,
                withCredentials : true

            }, options);

            return $.ajax(params);
        },

        _delete: function(model, options) {

            var params = _.extend({
                headers: {Accept: "*/*; charset=utf-8"},
                type: 'DELETE',
                contentType: "application/json",
                url: model.attributes.url,
                processData: false,
                crossDomain: true,
                withCredentials : true
            }, options);

            return $.ajax(params);
        },

        parse: function(obj) {

            // if (obj.response.code != 200) {
            //     debugger;
            // } else {
            //     return obj.response.model;
            // }

            return obj.response;
        },

        wrap: function(model) {
            var req = {
                request: {}
            }
            for (var a in model) {
                req.request[a] = model[a];
            }
            return req;
        }

    });

    return Model;
});
