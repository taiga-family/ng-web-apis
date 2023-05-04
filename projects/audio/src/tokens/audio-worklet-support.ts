import {inject, InjectionToken} from '@angular/core';
import {AUDIO_CONTEXT} from './audio-context';

export const AUDIO_WORKLET_SUPPORT = new InjectionToken<boolean>(
    'AudioWorklet browser support',
    {
        factory: () => !!inject(AUDIO_CONTEXT).audioWorklet,
    },
);
