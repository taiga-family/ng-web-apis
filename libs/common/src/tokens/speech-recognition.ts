import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_SPEECH_RECOGNITION = new InjectionToken<
    // @ts-ignore
    (typeof window)['speechRecognition'] | null
>('[WA_SPEECH_RECOGNITION]: [SPEECH_RECOGNITION]', {
    factory: () => {
        const windowRef: any = inject(WINDOW);

        return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
    },
    providedIn: 'platform',
});

/**
 * @deprecated: drop in v5.0, use {@link WA_SPEECH_RECOGNITION}
 */
export const SPEECH_RECOGNITION = WA_SPEECH_RECOGNITION;
