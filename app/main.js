var main = main || (function () {

    return {

        init: function (debug) {

            var self = this;
           
                (debug) ? console.log("Debug Mode") : console.log("Production Mode");
                self.setupRequire(debug);
           

        },

        setupRequire: function (debug) {

            var script = null;

            if (document.getElementById('requireScript') === null) {

                if (debug) {

                    script = document.createElement('script');
                    script.id = 'requireScript';
                    script.setAttribute('data-main', 'js/config/setup.js');
                    script.src = 'js/libs/require/require.js';
                    document.body.appendChild(script);

                } else {

                    //script = [
                    //    'js/config/app-init-built.js',
                    //    'js/lib/lazyload.js',
                    //    '../build/js/app/app-built.js'
                    //];

                    //for (var c = 0; c < script.length; c++) {
                    //    var s = document.createElement('script');
                    //    s.src = script[c];
                    //    document.body.appendChild(s);
                    //}

                }

            }

            return this;

        }
    };

})();
