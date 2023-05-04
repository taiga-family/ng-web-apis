import {ValueProvider} from '@angular/core';
import {CRYPTO} from '@ng-web-apis/common';
import {alwaysRejected, identity} from '../utils/functions';

export const CRYPTO_MOCK = {
    subtle: new Proxy(
        {},
        {
            get: () => () => alwaysRejected,
        },
    ),
    getRandomValues: identity,
};

export const UNIVERSAL_CRYPTO: ValueProvider = {
    provide: CRYPTO,
    useValue: CRYPTO_MOCK,
};
