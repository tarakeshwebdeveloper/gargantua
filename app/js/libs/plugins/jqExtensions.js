(function($){
    $.postX = function(url, data, callback){
        $('#loader').show();
        $.post(url,data, function(res){
            var code = res.response.code;
            if(code == 0 || code == 200){
                callback(res);
            }
            else{
                app.trigger("response:error", res.response.message);
                return false;
            }

        }).fail(function(res){

            var msg = "Something went wrong. Please try after some time or contact administrator."
            if(res.responseJSON.response.message != undefined){
                msg =  "Code " +  res.responseJSON.response.code +": "
                        + res.responseJSON.response.message;

            }

            app.trigger("response:error", msg);
            return false;

        }).done(function () { $('#loader').hide(); });
    }

    $.toggleDisplay = function (e1, e1, effect) {
        var _effect = null;
        if (effect != undefined) {
            _effect = effect;
        }
    }

    $.getAllKeys = function (jsonObject) {
        var k = [];
        for (var key in jsonObject) {
            k.push(key);
        }

        return (k.length > 0 ? k : null)
    }

    $.getDataColumns = function (jsonObject) {
        var k = [];
        if ($.isArray(jsonObject)) {
            for (var i = 0; i <= jsonObject.length - 1; i++) {
                k.push({ "data": jsonObject[i] });
            }
        }
        else {
            for (var key in jsonObject) {
                k.push({ "data": key });
            }
        }
        return (k.length > 0 ? k : null)
    }

    $.getColumnIndexByName = function (jsonObject, colName) {
        var i = 0; isFound = false;
        if ($.isArray(jsonObject)) {
            for (var j = 0 ; j <= jsonObject.length - 1; j++) {
                if (jsonObject[j] && jsonObject[j].toLowerCase() == colName.toLowerCase()) {
                    i = j; isFound = true; break;
                }
            }
        }
        else {
            for (var key in jsonObject) {
                if (key.toLowerCase() == colName.toLowerCase()) {
                    isFound = true; break;
                }
                i++;
            }
        }

        return (isFound) ? i : null;
    }

    $.getColumnIndexes = function (array, reverse) {
        var k = {};
        if (reverse && !reverse) {
            for (var j = 0 ; j <= array.length - 1; j++) {
                k[j.toString()] = array[j];
            }
        }
        else {
            for (var j = 0 ; j <= array.length - 1; j++) {
                k[array[j]] = j;
            }
        }

        return k;
    }

    $.fn.insertAt = function (index, element) {
        var lastIndex = this.children().size()
        if (index < 0) {
            index = Math.max(0, lastIndex + 1 + index)
        }
        this.append(element)
        if (index < lastIndex) {
            this.children().eq(index).before(this.children().last())
        }
        return this;
    }


    $.fn.getStyleProps = function () {
        var that = $(this),
         style = that.attr("style") || "",
         temp = style.split(";"),
         props = {};
        $.each(temp, function (i, p) {
            var ps = p.split(":");
            if(ps[0].length > 0)
            props[ps[0].trim()] = ps[1].trim();
        });
        return props;
    }

    $.fn.removeStyleProps = function (except) {
        var that = $(this);
        var props = that.getStyleProps();
        var res = {};
        for (var s in except) {
            if (props.hasOwnProperty(except[s])) {
                res[except[s]] = props[except[s]]
            }
        }

        that.removeAttr("style").css(res);
        return that;
    }

    $.extend({
        sum: function (arr) {
            var r = 0;
            $.each(arr, function (i, v) {
                r += v;
            });
            return r;
        }
    });

    $.extend({

        getQueryParameters: function (str) {
            return (str || document.location.search)
                .replace(/(^\?)/, '')
                .split("&")
                .map(function (n) { return n = n.split(/=(.+)/), this[n[0]] = n[1], this }.bind({}))[0];
        }

    });


    $.extend({
        browser: function () {
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browserName = navigator.appName;
            var fullVersion = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;

            // In Opera 15+, the true version is after "OPR/" 
            if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
                browserName = "Opera";
                fullVersion = nAgt.substring(verOffset + 4);
            }
                // In older Opera, the true version is after "Opera" or after "Version"
            else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
                browserName = "Opera";
                fullVersion = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf("Version")) != -1)
                    fullVersion = nAgt.substring(verOffset + 8);
            }
                // In MSIE, the true version is after "MSIE" in userAgent
            else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
                browserName = "IE";//"Microsoft Internet Explorer";
                fullVersion = nAgt.substring(verOffset + 5);
            }
                // In Chrome, the true version is after "Chrome" 
            else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
                browserName = "Chrome";//"Google Chrome";
                fullVersion = nAgt.substring(verOffset + 7);
            }
                // In Safari, the true version is after "Safari" or after "Version" 
            else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
                browserName = "Safari";
                fullVersion = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf("Version")) != -1)
                    fullVersion = nAgt.substring(verOffset + 8);
            }
                // In Firefox, the true version is after "Firefox" 
            else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
                browserName = "Firefox"; //"Mozilla Firefox";
                fullVersion = nAgt.substring(verOffset + 8);
            }
                // In most other browsers, "name/version" is at the end of userAgent 
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browserName = nAgt.substring(nameOffset, verOffset);
                fullVersion = nAgt.substring(verOffset + 1);
                if (browserName.toLowerCase() == browserName.toUpperCase()) {
                    browserName = navigator.appName;
                }
            }
            // trim the fullVersion string at semicolon/space if present
            if ((ix = fullVersion.indexOf(';')) != -1) fullVersion = fullVersion.substring(0, ix);
            if ((ix = fullVersion.indexOf(' ')) != -1) fullVersion = fullVersion.substring(0, ix);

            majorVersion = parseInt('' + fullVersion, 10);
            if (isNaN(majorVersion)) {
                fullVersion = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }


            return {
                name: browserName,
                fullVersion: fullVersion,
                version: parseInt(majorVersion)
            }
        }
    })


    //IE10 Fix
    $.fn.extend({
        unwrapByParent: function (name) {
            var tat = $(this);
            var options = tat.parent().find('option');
            $.each(options, function (i, op) { if ($(op).parent().is(name)) { $(op).unwrap().show().removeAttr('disabled');} })
            return this;
        }
    })

    String.prototype.capitalizeFirstLetter = function () {
        if(this == null || this == "") return "";
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
    };
})(jQuery);