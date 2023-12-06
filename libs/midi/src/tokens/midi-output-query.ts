import {InjectionToken} from '@angular/core';

export const MIDI_OUTPUT_QUERY = new InjectionToken<string>(
    `[MIDI_OUTPUT_QUERY]: MIDIOutput object id or name`,
);
