import {InjectionToken} from '@angular/core';

export const WEB_AUDIO_SUPPORT = new InjectionToken<boolean>('Web Audio API support', {
    providedIn: 'root',
    factory: () => !!AudioContext,
});
