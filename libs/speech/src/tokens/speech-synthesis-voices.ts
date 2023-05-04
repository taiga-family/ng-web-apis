import {inject, InjectionToken} from '@angular/core';
import {SPEECH_SYNTHESIS} from '@ng-web-apis/common';
import {fromEvent, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export const SPEECH_SYNTHESIS_VOICES = new InjectionToken<
    Observable<readonly SpeechSynthesisVoice[]>
>('List of available voices for speech synthesis', {
    factory: () => {
        const speechSynthesisRef = inject(SPEECH_SYNTHESIS);

        return fromEvent(speechSynthesisRef, 'voiceschanged').pipe(
            startWith(null),
            map(() => speechSynthesisRef.getVoices()),
        );
    },
});
