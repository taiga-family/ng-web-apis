import {Provider} from '@angular/core';

import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';

/**
 * Just for unit tests
 */
export const providers: Provider[] = [
    {
        provide: CONSTRUCTOR_SUPPORT,
        useValue: false,
    },
];
