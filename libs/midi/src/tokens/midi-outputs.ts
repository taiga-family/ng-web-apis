import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

import {getPortsStream} from '../utils/get-ports-stream';

export const MIDI_OUTPUTS = new InjectionToken<Observable<WebMidi.MIDIOutput[]>>(
    `[MIDI_OUTPUTS]: Array of MIDI inputs`,
    {
        factory: () => getPortsStream(`outputs`),
    },
);
