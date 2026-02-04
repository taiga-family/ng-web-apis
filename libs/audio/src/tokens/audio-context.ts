import {InjectionToken} from '@angular/core';

export const WA_AUDIO_CONTEXT = new InjectionToken<BaseAudioContext>(
    '[WA_AUDIO_CONTEXT]',
    {factory: () => new AudioContext()},
);
