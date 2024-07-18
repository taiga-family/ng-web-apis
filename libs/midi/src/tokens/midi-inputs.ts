import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';

import {getPortsStream} from '../utils/get-ports-stream';

export const WA_MIDI_INPUTS = new InjectionToken<Observable<MIDIInput[]>>(
    '[WA_MIDI_INPUTS]',
    {
        factory: () => getPortsStream('inputs'),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_INPUTS}
 */
export const MIDI_INPUTS = WA_MIDI_INPUTS;
