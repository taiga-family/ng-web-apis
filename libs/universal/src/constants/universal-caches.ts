import {ValueProvider} from '@angular/core';
import {CACHES} from '@ng-web-apis/common';

import {alwaysRejected} from '../utils/functions';

export const CACHES_MOCK = {
    delete: async () => Promise.resolve(false),
    has: async () => Promise.resolve(false),
    keys: async () => Promise.resolve([]),
    match: alwaysRejected,
    open: alwaysRejected,
};

export const UNIVERSAL_CACHES: ValueProvider = {
    provide: CACHES,
    useValue: CACHES_MOCK,
};
