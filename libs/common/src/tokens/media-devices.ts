import {inject, InjectionToken} from '@angular/core';

import {NAVIGATOR} from './navigator';

export const MEDIA_DEVICES = new InjectionToken<MediaDevices>(
    '[MEDIA_DEVICES]: An abstraction over window.navigator.mediaDevices object',
    {
        factory: () => inject(NAVIGATOR).mediaDevices,
    },
);
