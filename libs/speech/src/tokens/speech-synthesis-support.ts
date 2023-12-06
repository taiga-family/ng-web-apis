import {inject, InjectionToken} from '@angular/core';
import {SPEECH_SYNTHESIS} from '@ng-web-apis/common';

export const SPEECH_SYNTHESIS_SUPPORT = new InjectionToken<boolean>(
    `[SPEECH_SYNTHESIS_SUPPORT]: Speech synthesis is supported on current platform`,
    {
        factory: () => !!inject(SPEECH_SYNTHESIS),
    },
);
