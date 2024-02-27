import {emptyFunction} from '../utils/functions';
import {DOMStringListMock} from './dom-string-list-mock';

export class LocationMock implements Location {
    public readonly ancestorOrigins = new DOMStringListMock();
    public hash = '';
    public host = '';
    public hostname = '';
    public href = '';
    public readonly origin = '';
    public pathname = '';
    public port = '';
    public protocol = '';
    public search = '';

    public assign = emptyFunction;

    public reload = emptyFunction;

    public replace = emptyFunction;
}
