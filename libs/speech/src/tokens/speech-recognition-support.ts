import {inject, InjectionToken} from '@angular/core';
import {WA_SPEECH_RECOGNITION} from '@ng-web-apis/common';

export const WA_SPEECH_RECOGNITION_SUPPORT = new InjectionToken<boolean>(
    '[WA_SPEECH_RECOGNITION_SUPPORT]',
    {
        factory: () => !!inject(WA_SPEECH_RECOGNITION),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_SPEECH_RECOGNITION_SUPPORT}
 */
export const SPEECH_RECOGNITION_SUPPORT = WA_SPEECH_RECOGNITION_SUPPORT;
