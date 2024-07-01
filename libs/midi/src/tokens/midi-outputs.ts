import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';

import {getPortsStream} from '../utils/get-ports-stream';

export const MIDI_OUTPUTS = new InjectionToken<Observable<MIDIOutput[]>>(
    '[MIDI_OUTPUTS]: Array of MIDI inputs',
    {
        factory: () => getPortsStream('outputs'),
    },
);
