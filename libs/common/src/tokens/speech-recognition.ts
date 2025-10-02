import {inject, InjectionToken, type Type} from '@angular/core';

import {WINDOW} from './window';

export const WA_SPEECH_RECOGNITION = new InjectionToken<Type<SpeechRecognition> | null>(
    '[WA_SPEECH_RECOGNITION]: [SPEECH_RECOGNITION]',
    {
        factory: () => {
            const windowRef: any = inject(WINDOW);

            return (
                windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null
            );
        },
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_SPEECH_RECOGNITION}
 */
export const SPEECH_RECOGNITION = WA_SPEECH_RECOGNITION;
