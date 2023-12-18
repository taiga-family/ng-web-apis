import {emptyFunction} from '../utils/functions';
import {DOMStringListMock} from './dom-string-list-mock';

export class LocationMock implements Location {
    readonly ancestorOrigins = new DOMStringListMock();
    hash = '';
    host = '';
    hostname = '';
    href = '';
    readonly origin = '';
    pathname = '';
    port = '';
    protocol = '';
    search = '';

    assign = emptyFunction;

    reload = emptyFunction;

    replace = emptyFunction;
}
