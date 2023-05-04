import {ValueProvider} from '@angular/core';
import {IncomingMessage} from 'http';

import {DOMStringListMock} from '../classes/dom-string-list-mock';
import {SSR_LOCATION} from '../tokens/ssr-location';
import {emptyFunction} from './functions';

export function provideLocation(req: IncomingMessage): ValueProvider {
    const protocol = 'encrypted' in req.socket ? 'https' : 'http';
    const url: any = new URL(`${protocol}://${req.headers['host']}${req.url}`);

    url.assign = emptyFunction;
    url.reload = emptyFunction;
    url.replace = emptyFunction;
    url.ancestorOrigins = new DOMStringListMock();

    return {
        provide: SSR_LOCATION,
        useValue: url,
    };
}
