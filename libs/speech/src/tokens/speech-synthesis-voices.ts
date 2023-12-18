import {inject, InjectionToken} from '@angular/core';
import {SPEECH_SYNTHESIS} from '@ng-web-apis/common';
import {fromEvent, map, Observable, startWith} from 'rxjs';

export const SPEECH_SYNTHESIS_VOICES = new InjectionToken<
    Observable<readonly SpeechSynthesisVoice[]>
>('[SPEECH_SYNTHESIS_VOICES]: List of available voices for speech synthesis', {
    factory: () => {
        const speechSynthesisRef = inject(SPEECH_SYNTHESIS);

        return fromEvent(speechSynthesisRef, 'voiceschanged').pipe(
            startWith(null),
            map(() => speechSynthesisRef.getVoices()),
        );
    },
});
