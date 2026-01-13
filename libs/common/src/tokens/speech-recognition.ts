import {inject, InjectionToken, type Type} from '@angular/core';

import {WA_WINDOW} from './window';

declare global {
    /**
     * Workaround:
     * This empty interface prevents TS errors when a consumer has
     * `skipLibCheck: false` and did not include `dom-speech-recognition`
     * in `tsconfig.types`.
     *
     * The real `SpeechRecognition` interface is provided by
     * `@types/dom-speech-recognition` when it is present.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface SpeechRecognition {}
}

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
