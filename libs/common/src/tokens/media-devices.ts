import {inject, InjectionToken} from '@angular/core';

import {NAVIGATOR} from './navigator';

export const WA_MEDIA_DEVICES = new InjectionToken<MediaDevices>('[WA_MEDIA_DEVICES]', {
    factory: () => inject(NAVIGATOR).mediaDevices,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_MEDIA_DEVICES}
 */
export const MEDIA_DEVICES = WA_MEDIA_DEVICES;
