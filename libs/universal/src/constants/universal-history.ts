import {type ValueProvider} from '@angular/core';
import {WA_HISTORY} from '@ng-web-apis/common';

import {emptyFunction} from '../utils/functions';

export const HISTORY_MOCK = {
    length: 0,
    scrollRestoration: 'auto',
    state: {},
    back: emptyFunction,
    forward: emptyFunction,
    go: emptyFunction,
    pushState: emptyFunction,
    replaceState: emptyFunction,
};

export const UNIVERSAL_HISTORY: ValueProvider = {
    provide: WA_HISTORY,
    useValue: HISTORY_MOCK,
};
