window.app = window.app || {};

require.config({
    //urlArgs: "nocache=" +  (new Date()).getTime(),
    baseUrl: "./js",
    waitSeconds : 20,
    paths: {

        //jquery
        "jquery": "libs/jquery/jquery.min",
        "jqueryUi": "libs/jquery/jquery-ui.min",

        //underscore & backbone
        "underscore": "libs/backbone/lodash",
        "backbone": "libs/backbone/backbone",
        "backbone.Validation": "libs/backbone/validation",
        "text": "libs/require/text",

        //lazy
        "lazy": "libs/lazy/lazy",
        "lazy-builder": "libs/lazy/lazy-builder",
        "promise-adaptor": "libs/lazy/promise-adaptor-jquery",

        //bootstrap
        "bootstrap": "libs/bootstrap/bootstrap.min",
        "bootstrapValidator": "libs/bootstrap/bootstrap-validator",
        "bootstrapSelect": "libs/bootstrap/bootstrap-select",
        "bootstrap-dialog": "libs/bootstrap/bootstrap-modal-more",
        "metis-menu": "libs/bootstrap/metis-menu.min",

        //Plugins
        "tooltip" : "libs/plugins/tooltip",
        "chain": "libs/plugins/chain",
        "convert": "libs/plugins/convert",
        "jqExt": "libs/plugins/jqExtensions",
        "cookie": "libs/plugins/cookie.min",

        //Configs
        "apiConfig": "config/api",
        "constantsConfig": "config/constants",

        // Applications bases
        "modelBase": "core/model",
        "collectionBase": "core/collection",
        "viewBase": "core/view",
        "controllerBase": "core/controller"

    },
    shim: {
        "jqueryUi": ["jquery"],
        "bootstrap": ["jquery"],
        "bootstrapValidator": ["jquery"],
        "metis-menu": ["jquery","bootstrap"],
        "bootstrapSelect": ["jquery"],
        "tooltip": ["jquery"],
        "cookie": ["jquery"],
        "convert": ["jquery"],
        "jqExt": ["jquery"],
        "chain": ["backbone"],
        'bootstrap-dialog': {
            deps: ["jquery", "underscore", "backbone", "bootstrap"]
        },
        "backbone": {
            "deps": ["underscore", "jquery"],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": '_'
        },
        'backbone.Validation': ['backbone']
    },
    map: {
        "*": {
            "lodash": "underscore"
        }
    }
});

require(
    ["jquery",
    "backbone",
    "bootstrap",
    "lazy!config/route"],
    function ($, backbone, bootstrap, router) {
    router.get().then(function (Router) {
        app.router = new Router();
        //Backbone.history.start();
    });
});
