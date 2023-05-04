import {InjectionToken} from '@angular/core';

export const AUDIO_CONTEXT = new InjectionToken<BaseAudioContext>(
    'Web Audio API context',
    {
        providedIn: 'root',
        factory: () => new AudioContext(),
    },
);
