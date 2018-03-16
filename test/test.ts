import rainbowJSFactory from '../index';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Hello function', () => {
  it('should return hello world', () => {
    const r = new rainbowJSFactory();
  /*  r.init("http://localhost:8081/");
    r.getModules()
    .subscribe((data) => {

        if (data.response.statusCode === 200) {
            console.log(data.body); // Show the JSON response object.
        }
    }, (err) => console.error(err) // Show error in console
    ); */

    expect('Ok').to.equal('Ok');
  });
});