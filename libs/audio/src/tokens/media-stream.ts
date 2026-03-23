import {InjectionToken} from '@angular/core';

export const WA_MEDIA_STREAM = new InjectionToken<MediaStream>(
    ngDevMode ? '[WA_MEDIA_STREAM]' : '',
);
