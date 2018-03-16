"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var chai_1 = require("chai");
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Hello function', function () {
    it('should return hello world', function () {
        var r = new index_1.default();
        /*  r.init("http://localhost:8081/");
          r.getModules()
          .subscribe((data) => {
      
              if (data.response.statusCode === 200) {
                  console.log(data.body); // Show the JSON response object.
              }
          }, (err) => console.error(err) // Show error in console
          ); */
        chai_1.expect('Ok').to.equal('Ok');
    });
});
