import {InjectionToken} from '@angular/core';

export const AUDIO_CONTEXT = new InjectionToken<BaseAudioContext>(
    '[AUDIO_CONTEXT]: Web Audio API context',
    {
        providedIn: 'root',
        factory: () => new AudioContext(),
    },
);
