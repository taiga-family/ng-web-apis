import {inject, InjectionToken} from '@angular/core';

import {WA_NAVIGATOR} from './navigator';

export const WA_MEDIA_DEVICES = new InjectionToken<MediaDevices>('[WA_MEDIA_DEVICES]', {
    factory: () => inject(WA_NAVIGATOR).mediaDevices,
});
