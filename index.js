'use strict';

var Client = require('node-rest-client').Client;

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
var self = module.exports = {
    numFormatter: function(number, locale) {
        return number.toLocaleString(locale);
    },
    restCall: function(url) {
        var client = new Client();
        var args = {
            data: { test: "hello" }, // data passed to REST method (only useful in POST, PUT or PATCH methods) 
            path: { "id": 120 }, // path substitution var 
            parameters: { arg1: "hello", arg2: "world" }, // this is serialized as URL parameters 
            headers: { "test-header": "client-api" }, // request headers ,
            opts: { method: "VIEW" }
        };


        client.get("http://localhost:8080/", args,
            function(data, response) {
                // parsed response body as js object 
                console.log(data);
                console.log("asega");

                // raw response 
                console.log(response);
            });


        /* registering remote methods 

        client.registerMethod("jsonMethod", "http://localhost:8080/", "GET");


        /* this would construct the following URL before invocation
         *
         * http://remote.site/rest/json/120/method?arg1=hello&arg2=world
         *
         */
        /*
        client.methods.jsonMethod(args, function(data, response) {
            // parsed response body as js object 
            console.log(data);
            // raw response 
            console.log(response);
        });*/

    }
};

self.restCall();