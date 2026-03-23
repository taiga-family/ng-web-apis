import {InjectionToken} from '@angular/core';

export const WA_WEB_AUDIO_SUPPORT = new InjectionToken<boolean>(
    ngDevMode ? '[WA_WEB_AUDIO_SUPPORT]' : '',
    {factory: () => typeof AudioContext !== 'undefined'},
);
