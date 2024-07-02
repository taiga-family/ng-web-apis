import {inject, InjectionToken} from '@angular/core';

import {WA_AUDIO_CONTEXT} from './audio-context';

/**
 * This is mostly for internal use only
 */
export const WA_CONSTRUCTOR_SUPPORT = new InjectionToken<boolean>(
    '[WA_CONSTRUCTOR_SUPPORT]: Tests if constructor mode of node creation is supported or a fallback to factory method is needed',
    {
        providedIn: 'root',
        factory: () => {
            try {
                return !!new GainNode(inject(WA_AUDIO_CONTEXT));
            } catch (_) {
                return false;
            }
        },
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_CONSTRUCTOR_SUPPORT}
 */
export const CONSTRUCTOR_SUPPORT = WA_CONSTRUCTOR_SUPPORT;
