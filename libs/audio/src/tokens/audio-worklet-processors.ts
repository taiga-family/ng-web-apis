import {InjectionToken} from '@angular/core';

export const AUDIO_WORKLET_PROCESSORS = new InjectionToken<readonly string[]>(
    '[AUDIO_WORKLET_PROCESSORS]: Web Audio API worklet processors paths',
    {
        providedIn: 'root',
        factory: () => [],
    },
);
