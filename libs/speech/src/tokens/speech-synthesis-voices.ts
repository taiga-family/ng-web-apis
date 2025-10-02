import {inject, InjectionToken} from '@angular/core';
import {SPEECH_SYNTHESIS} from '@ng-web-apis/common';
import {fromEvent, map, type Observable, startWith} from 'rxjs';

export const WA_SPEECH_SYNTHESIS_VOICES = new InjectionToken<
    Observable<readonly SpeechSynthesisVoice[]>
>('[WA_SPEECH_SYNTHESIS_VOICES]', {
    factory: () => {
        const speechSynthesisRef = inject(SPEECH_SYNTHESIS);

        return fromEvent(speechSynthesisRef, 'voiceschanged').pipe(
            startWith(null),
            map(() => speechSynthesisRef.getVoices()),
        );
    },
});

/**
 * @deprecated: drop in v5.0, use {@link WA_SPEECH_SYNTHESIS_VOICES}
 */
export const SPEECH_SYNTHESIS_VOICES = WA_SPEECH_SYNTHESIS_VOICES;
