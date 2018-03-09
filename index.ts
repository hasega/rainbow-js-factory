'use strict';

import { Observable } from 'rxjs';
import { RxHttpRequest } from 'rx-http-request';




export function rainbowJSFactory()
{
    return {
        numFormatter: function (number, locale) {
            return number.toLocaleString(locale);
        },
        path: "",
        init(p) { this.path = p; },
        getModules(): Observable<any> {
            return RxHttpRequest.get(this.path);
        },
        restCall: function () {
            var args = {
                data: {
                    test: "hello"
                }, // data passed to REST method (only useful in POST, PUT or PATCH methods)
                path: {
                    "id": 120
                }, // path substitution var
                parameters: {
                    arg1: "hello",
                    arg2: "world"
                }, // this is serialized as URL parameters
                headers: {
                    "test-header": "client-api"
                }, // request headers ,
                opts: {
                    method: "VIEW"
                }
            };

            console.log(this.path);
        }
    }
}

export default rainbowJSFactory;


