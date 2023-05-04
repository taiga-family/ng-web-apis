import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const SPEECH_RECOGNITION = new InjectionToken<
    // @ts-ignore
    typeof window['speechRecognition'] | null
>('An abstraction over SpeechRecognition class', {
    factory: () => {
        const windowRef: any = inject(WINDOW);

        return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
    },
});
