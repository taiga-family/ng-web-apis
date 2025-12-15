import {InjectionToken} from '@angular/core';

export const WA_AUDIO_CONTEXT = new InjectionToken<BaseAudioContext>(
    '[WA_AUDIO_CONTEXT]',
    {
        providedIn: 'root',
        // eslint-disable-next-line compat/compat
        factory: () => new AudioContext(),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_AUDIO_CONTEXT}
 */
export const AUDIO_CONTEXT = WA_AUDIO_CONTEXT;
