import {InjectionToken} from '@angular/core';

export const WA_WEB_AUDIO_SUPPORT = new InjectionToken<boolean>(
    '[WA_WEB_AUDIO_SUPPORT]: Web Audio API support',
    {
        providedIn: 'root',
        factory: () => !!AudioContext,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_WEB_AUDIO_SUPPORT}
 */
export const WEB_AUDIO_SUPPORT = WA_WEB_AUDIO_SUPPORT;
