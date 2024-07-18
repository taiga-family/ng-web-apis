import {inject, InjectionToken} from '@angular/core';

import {WA_AUDIO_CONTEXT} from './audio-context';

export const WA_AUDIO_WORKLET_SUPPORT = new InjectionToken<boolean>(
    '[WA_AUDIO_WORKLET_SUPPORT]',
    {
        factory: () => !!inject(WA_AUDIO_CONTEXT).audioWorklet,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_AUDIO_WORKLET_SUPPORT}
 */
export const AUDIO_WORKLET_SUPPORT = WA_AUDIO_WORKLET_SUPPORT;
