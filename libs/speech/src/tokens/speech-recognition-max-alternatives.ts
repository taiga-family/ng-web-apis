import {InjectionToken} from '@angular/core';

export const WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES = new InjectionToken<number>(
    '[WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES]',
    {factory: () => 1},
);
