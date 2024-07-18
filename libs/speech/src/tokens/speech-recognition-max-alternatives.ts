import {InjectionToken} from '@angular/core';

export const WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES = new InjectionToken<number>(
    '[WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES]',
    {
        factory: () => 1,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES}
 */
export const SPEECH_RECOGNITION_MAX_ALTERNATIVES = WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES;
