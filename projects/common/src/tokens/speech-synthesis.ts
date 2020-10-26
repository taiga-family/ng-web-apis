import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const SPEECH_SYNTHESIS = new InjectionToken<SpeechSynthesis | null>(
    'An abstraction over window.speechSynthesis object',
    {
        factory: () => inject(WINDOW).speechSynthesis,
    },
);
