import {Inject, Injectable, LOCALE_ID, NgZone, Optional, Type} from '@angular/core';
import {SPEECH_RECOGNITION} from '@ng-web-apis/common';
import {Observable} from 'rxjs';

import {SPEECH_RECOGNITION_MAX_ALTERNATIVES} from '../tokens/speech-recognition-max-alternatives';

@Injectable({
    providedIn: `root`,
})
export class SpeechRecognitionService extends Observable<SpeechRecognitionResult[]> {
    constructor(
        @Inject(SPEECH_RECOGNITION) classRef: Type<SpeechRecognition> | null,
        @Optional() @Inject(LOCALE_ID) lang: string | null = ``,
        @Inject(SPEECH_RECOGNITION_MAX_ALTERNATIVES) maxAlternatives: number = 1,
        @Inject(NgZone) ngZone: {run: any} = {run: (fn: any) => fn()},
    ) {
        super(subscriber => {
            if (!classRef) {
                subscriber.error(new Error(`SpeechRecognition is not supported`));

                return;
            }

            // eslint-disable-next-line new-cap
            const speechRecognition = new classRef();

            speechRecognition.maxAlternatives = maxAlternatives;
            speechRecognition.lang = lang || ``;
            speechRecognition.interimResults = true;
            speechRecognition.onerror = error => subscriber.error(error);
            speechRecognition.onend = () => subscriber.complete();
            speechRecognition.onresult = ({results}) =>
                ngZone.run(() =>
                    subscriber.next(
                        Array.from({length: results.length}, (_, i) => results[i]),
                    ),
                );

            speechRecognition.start();

            return () => speechRecognition.abort();
        });
    }
}
