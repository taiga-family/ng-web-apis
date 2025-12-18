import {inject, InjectionToken} from '@angular/core';
import {WA_SPEECH_SYNTHESIS} from '@ng-web-apis/common';
import {fromEvent, map, type Observable, startWith} from 'rxjs';

export const WA_SPEECH_SYNTHESIS_VOICES = new InjectionToken<
    Observable<readonly SpeechSynthesisVoice[]>
>('[WA_SPEECH_SYNTHESIS_VOICES]', {
    factory: () => {
        const speechSynthesisRef = inject(WA_SPEECH_SYNTHESIS);

        return fromEvent(speechSynthesisRef, 'voiceschanged').pipe(
            startWith(null),
            map(() => speechSynthesisRef.getVoices()),
        );
    },
});
