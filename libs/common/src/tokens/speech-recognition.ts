import {inject, InjectionToken, type Type} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_SPEECH_RECOGNITION = new InjectionToken<Type<SpeechRecognition> | null>(
    '[WA_SPEECH_RECOGNITION]: [WA_SPEECH_RECOGNITION]',
    {
        factory: () => {
            const windowRef: any = inject(WA_WINDOW);

            return (
                windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null
            );
        },
    },
);
