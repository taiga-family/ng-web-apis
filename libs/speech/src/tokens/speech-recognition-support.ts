import {inject, InjectionToken} from '@angular/core';
import {SPEECH_RECOGNITION} from '@ng-web-apis/common';

export const SPEECH_RECOGNITION_SUPPORT = new InjectionToken<boolean>(
    'Speech recognition is supported on current platform',
    {
        factory: () => !!inject(SPEECH_RECOGNITION),
    },
);
