import {InjectionToken} from '@angular/core';

export const MIDI_OUTPUT_QUERY = new InjectionToken<string>(
    'MIDIOutput object id or name',
);
