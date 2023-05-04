import {InjectionToken} from '@angular/core';

export const AUDIO_WORKLET_PROCESSORS = new InjectionToken<ReadonlyArray<string>>(
    'Web Audio API worklet processors paths',
    {
        providedIn: 'root',
        factory: () => [],
    },
);
