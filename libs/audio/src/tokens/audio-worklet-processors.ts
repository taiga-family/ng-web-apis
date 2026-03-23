import {InjectionToken} from '@angular/core';

export const WA_AUDIO_WORKLET_PROCESSORS = new InjectionToken<readonly string[]>(
    ngDevMode ? '[WA_AUDIO_WORKLET_PROCESSORS]' : '',
    {factory: () => []},
);
