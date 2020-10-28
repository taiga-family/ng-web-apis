import {inject, InjectionToken, Type} from '@angular/core';
import {WINDOW} from './window';

export const SPEECH_RECOGNITION = new InjectionToken<Type<SpeechRecognition> | null>(
    'An abstraction over SpeechRecognition class',
    {
        factory: () => {
            const windowRef: any = inject(WINDOW);

            return (
                windowRef.speechRecogniton || windowRef.webkitSpeechRecognition || null
            );
        },
    },
);
