import { Observable } from 'rxjs';
import { RxHttpRequest } from 'rx-http-request';




export default class rainbowJSFactory {

    public path: String;
    public numFormatter(number, locale) {
        return number.toLocaleString(locale);
    }

    constructor(p: string) {
        this.path = p;
    }

    init(p) { this.path = p; }

    getModules(): Observable<any> {
        return RxHttpRequest.get(this.path);
    }


}


