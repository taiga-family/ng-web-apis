import {InjectionToken} from '@angular/core';

export const WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES = new InjectionToken<number>(
    ngDevMode ? '[WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES]' : '',
    {factory: () => 1},
);
