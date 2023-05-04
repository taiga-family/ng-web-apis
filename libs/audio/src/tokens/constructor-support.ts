import {inject, InjectionToken} from '@angular/core';
import {AUDIO_CONTEXT} from './audio-context';

/**
 * This is mostly for internal use only
 */
export const CONSTRUCTOR_SUPPORT = new InjectionToken<boolean>(
    'Tests if constructor mode of node creation is supported or a fallback to factory method is needed',
    {
        providedIn: 'root',
        factory: () => {
            try {
                return !!new GainNode(inject(AUDIO_CONTEXT));
            } catch (_) {
                return false;
            }
        },
    },
);
