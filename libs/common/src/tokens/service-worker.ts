import {inject, InjectionToken} from '@angular/core';

import {NAVIGATOR} from './navigator';

export const SERVICE_WORKER = new InjectionToken(
    `[SERVICE_WORKER]: An abstraction over window.navigator.serviceWorker object`,
    {
        factory: () => inject(NAVIGATOR).serviceWorker,
    },
);
