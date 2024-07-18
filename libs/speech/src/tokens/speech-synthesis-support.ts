import {inject, InjectionToken} from '@angular/core';
import {SPEECH_SYNTHESIS} from '@ng-web-apis/common';

export const WA_SPEECH_SYNTHESIS_SUPPORT = new InjectionToken<boolean>(
    '[WA_SPEECH_SYNTHESIS_SUPPORT]',
    {
        factory: () => !!inject(SPEECH_SYNTHESIS),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_SPEECH_SYNTHESIS_SUPPORT}
 */
export const SPEECH_SYNTHESIS_SUPPORT = WA_SPEECH_SYNTHESIS_SUPPORT;
