define([
    "apiConfig",
     "lazy!modules/shell/controller",
     "lazy!modules/dashboard/controller"
    //list of controller goes here

], function (
    ApiConfig,
    ShellController,
    DashboardController
) {

    "use strict";

    var router = Backbone.Router.extend({

        initialize: function () {
           
            //this.views = {};
            //this.models = {};
            this.currentRouter = window.location.hash;
            this.controllers = {};
            this.checkAuth();


            $.ajaxSetup({
                timeout: 10000,
                retry: 0
            });

            $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
                options.beforeSend = function (xhr) {

                   
                };
                options.complete = function () {
                   
                };
                // options.xhrFields = {
                //     withCredentials: true
                // };
            });

        },
        
        // --------------------------------------------------------------------------------------------
        // Authentication Check
        // --------------------------------------------------------------------------------------------

        checkAuth: function () {
            var self = this;
            //check if user is already logged in.
            //if logged in load shell and then route current with backbone history
            // if not  route to login or load login page


            //imagine user is logged in
            var cb = function () {
                Backbone.history.start();
                self.registerListeners();
            }
            this.shell(cb);
            
        },

        // --------------------------------------------------------------------------------------------
        // listeners
        // --------------------------------------------------------------------------------------------

        registerListeners: function () {

            this.on("shell", function (args) { this.shell(args); }, this);
            this.on("login", function (args) { this.login(args); }, this);
          

        },

        // ------------------------------------------------------------------------------------------
        // Routes
        // ------------------------------------------------------------------------------------------

        routes: {
            "(/)": "dashboard",
            "login": "login"
        },

        // ------------------------------------------------------------------------------------------
        // Route Handlers
        // ------------------------------------------------------------------------------------------

        startup: function () {
            
           
        },

        dashboard: function () {
            this.executeController(DashboardController, "dashboard", null);
        },


        shell: function (callback) {
            this.executeController(ShellController, "shell", null, callback);
        },

        login: function () { 
            
        },


        //controller and view mapper
        executeController: function (controller, view, options, callback) {

            var self = this,
                name = controller.name.substring(controller.name.indexOf('/') + 1).replace('/', '').toUpperCase(),
                params = (options == undefined) ? null : options.params;

            try{
                if (!self.controllers.hasOwnProperty(name)) {
                    controller.get().then(function (Ctrl) {
                        self.controllers[name] = new Ctrl()
                                                .setup()
                                                .events()
                                                .executeView(view, params);
                        if (callback) callback();
                    });
                } else {
                    self.controllers[name].executeView(view, params);
                    if (callback) callback();
                }
            }
            catch (ex) {
                console.log("Controller Error:" + ex);
            }
        }
    });

    return router;

});
