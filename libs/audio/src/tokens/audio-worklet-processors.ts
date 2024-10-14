import {InjectionToken} from '@angular/core';

export const WA_AUDIO_WORKLET_PROCESSORS = new InjectionToken<readonly string[]>(
    '[WA_AUDIO_WORKLET_PROCESSORS]',
    {
        providedIn: 'root',
        factory: () => [],
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_AUDIO_WORKLET_PROCESSORS}
 */
export const AUDIO_WORKLET_PROCESSORS = WA_AUDIO_WORKLET_PROCESSORS;
