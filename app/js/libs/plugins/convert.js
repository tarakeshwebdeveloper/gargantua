define(['jquery'], function(){

    var convert = {

        fromToJson : function(formObject){

        },

        parseQueryString : function(qs){

        },

        toQueryString : function(arr, appendQuestion){

        },

        toBoolean: function (value) {
           
            if (value == "true" || value == 1 || value == "1" || value == true) return true;
            else if (value == "false" || value == 0 || value == "0" || value ==false || value == null) return false;
        },

        toNumber:function(value){

        },

        toString : function(string){

        }

    }

    return convert;

});