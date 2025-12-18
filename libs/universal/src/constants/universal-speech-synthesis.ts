import {type ValueProvider} from '@angular/core';
import {WA_SPEECH_SYNTHESIS} from '@ng-web-apis/common';

import {alwaysFalse, emptyArray, emptyFunction} from '../utils/functions';

export const SPEECH_SYNTHESIS_MOCK: SpeechSynthesis = {
    paused: false,
    pending: false,
    speaking: false,
    onvoiceschanged: emptyFunction,
    addEventListener: emptyFunction,
    removeEventListener: emptyFunction,
    dispatchEvent: alwaysFalse,
    cancel: emptyFunction,
    pause: emptyFunction,
    resume: emptyFunction,
    speak: emptyFunction,
    getVoices: emptyArray,
};

export const UNIVERSAL_SPEECH_SYNTHESIS: ValueProvider = {
    provide: WA_SPEECH_SYNTHESIS,
    useValue: SPEECH_SYNTHESIS_MOCK,
};
