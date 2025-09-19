import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_SPEECH_SYNTHESIS = new InjectionToken<SpeechSynthesis>(
    '[WA_SPEECH_SYNTHESIS]',
    {
        factory: () => inject(WINDOW).speechSynthesis,
        providedIn: 'platform',
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_SPEECH_SYNTHESIS}
 */
export const SPEECH_SYNTHESIS = WA_SPEECH_SYNTHESIS;
