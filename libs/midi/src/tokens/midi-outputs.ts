import {InjectionToken} from '@angular/core';
import {type Observable} from 'rxjs';

import {getPortsStream} from '../utils/get-ports-stream';

export const WA_MIDI_OUTPUTS = new InjectionToken<Observable<MIDIOutput[]>>(
    '[WA_MIDI_OUTPUTS]',
    {factory: () => getPortsStream('outputs')},
);
