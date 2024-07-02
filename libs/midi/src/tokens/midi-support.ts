import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';

export const WA_MIDI_SUPPORT = new InjectionToken<boolean>(
    '[WA_MIDI_SUPPORT]: Web MIDI API support',
    {
        factory: () => !!inject(NAVIGATOR).requestMIDIAccess,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_SUPPORT}
 */
export const MIDI_SUPPORT = WA_MIDI_SUPPORT;
