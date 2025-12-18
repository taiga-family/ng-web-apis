import {InjectionToken} from '@angular/core';

export const WA_MIDI_OUTPUT = new InjectionToken<Promise<MIDIOutput | undefined>>(
    '[WA_MIDI_OUTPUT]',
);
