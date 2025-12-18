import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_SPEECH_SYNTHESIS = new InjectionToken<SpeechSynthesis>(
    '[WA_SPEECH_SYNTHESIS]',
    {factory: () => inject(WA_WINDOW).speechSynthesis},
);
