import {InjectionToken} from '@angular/core';

export const AUDIO_NODE = new InjectionToken<AudioNode | null>(
    'Web Audio API audio node',
    {
        factory: () => null,
    },
);
