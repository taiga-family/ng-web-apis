import {ValueProvider} from '@angular/core';
import {CACHES} from '@ng-web-apis/common';
import {alwaysRejected} from '../utils/functions';

export const CACHES_MOCK = {
    delete: () => Promise.resolve(false),
    has: () => Promise.resolve(false),
    keys: () => Promise.resolve([]),
    match: alwaysRejected,
    open: alwaysRejected,
};

export const UNIVERSAL_CACHES: ValueProvider = {
    provide: CACHES,
    useValue: CACHES_MOCK,
};
