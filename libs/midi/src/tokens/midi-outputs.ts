import MIDIOutput = WebMidi.MIDIOutput;

import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {getPortsStream} from '../utils/get-ports-stream';

export const MIDI_OUTPUTS = new InjectionToken<Observable<MIDIOutput[]>>(
    'Array of MIDI inputs',
    {
        factory: () => getPortsStream('outputs'),
    },
);
