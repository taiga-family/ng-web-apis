import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';

import {getPortsStream} from '../utils/get-ports-stream';

export const MIDI_INPUTS = new InjectionToken<Observable<WebMidi.MIDIInput[]>>(
    '[MIDI_INPUTS]: Array of MIDI inputs',
    {
        factory: () => getPortsStream('inputs'),
    },
);
