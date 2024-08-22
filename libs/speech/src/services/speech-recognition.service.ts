import {inject, Injectable, LOCALE_ID, NgZone} from '@angular/core';
import {WA_SPEECH_RECOGNITION} from '@ng-web-apis/common';
import {Observable} from 'rxjs';

import {WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES} from '../tokens/speech-recognition-max-alternatives';

@Injectable({
    providedIn: 'root',
})
export class SpeechRecognitionService extends Observable<SpeechRecognitionResult[]> {
    private readonly classRef = inject(WA_SPEECH_RECOGNITION);
    private readonly lang = inject(LOCALE_ID, {optional: true});
    private readonly maxAlternatives = inject(WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES);
    private readonly ngZone = inject(NgZone);

    constructor() {
        super((subscriber) => {
            if (!this.classRef) {
                subscriber.error(new Error('SpeechRecognition is not supported'));

                return () => {};
            }

            // eslint-disable-next-line new-cap
            const speechRecognition = new this.classRef();

            speechRecognition.maxAlternatives = this.maxAlternatives;
            speechRecognition.lang = this.lang ?? '';
            speechRecognition.interimResults = true;
            speechRecognition.onerror = (error: unknown) => subscriber.error(error);
            speechRecognition.onend = () => subscriber.complete();
            speechRecognition.onresult = ({results}: any) =>
                this.ngZone.run(() =>
                    subscriber.next(
                        Array.from({length: results.length}, (_, i) => results[i]),
                    ),
                );

            speechRecognition.start();

            return () => speechRecognition.abort();
        });
    }
}
