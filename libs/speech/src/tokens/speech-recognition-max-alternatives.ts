import {InjectionToken} from '@angular/core';

export const SPEECH_RECOGNITION_MAX_ALTERNATIVES = new InjectionToken<number>(
    `[SPEECH_RECOGNITION_MAX_ALTERNATIVES]: Max alternatives for speech recognition`,
    {
        factory: () => 1,
    },
);
