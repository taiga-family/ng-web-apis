import {inject, InjectionToken, REQUEST} from '@angular/core';

import {DOMStringListMock} from '../classes/dom-string-list-mock';
import {emptyFunction} from '../utils/functions';

export const WA_SSR_LOCATION = new InjectionToken<Location>('[WA_SSR_LOCATION]', {
    factory: () => {
        const req = inject(REQUEST, {optional: true});

        if (req) {
            const url: any = new URL(req.url);

            url.assign = emptyFunction;
            url.reload = emptyFunction;
            url.replace = emptyFunction;
            url.ancestorOrigins = new DOMStringListMock();

            return url;
        }
    },
});
