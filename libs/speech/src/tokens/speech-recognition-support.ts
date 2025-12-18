import {inject, InjectionToken} from '@angular/core';
import {WA_SPEECH_RECOGNITION} from '@ng-web-apis/common';

export const WA_SPEECH_RECOGNITION_SUPPORT = new InjectionToken<boolean>(
    '[WA_SPEECH_RECOGNITION_SUPPORT]',
    {factory: () => !!inject(WA_SPEECH_RECOGNITION)},
);
