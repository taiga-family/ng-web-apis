import MIDIInput = WebMidi.MIDIInput;

import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {getPortsStream} from '../utils/get-ports-stream';

export const MIDI_INPUTS = new InjectionToken<Observable<MIDIInput[]>>(
    'Array of MIDI inputs',
    {
        factory: () => getPortsStream('inputs'),
    },
);
