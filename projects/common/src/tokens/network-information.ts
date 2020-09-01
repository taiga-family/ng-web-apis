import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from './navigator';

export const NETWORK_INFORMATION = new InjectionToken<NetworkInformation | null>(
    'An abstraction over window.navigator.connection object',
    {
        factory: () => inject(NAVIGATOR).connection || null,
    },
);
