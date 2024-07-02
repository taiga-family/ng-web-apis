import {InjectionToken} from '@angular/core';

export const WA_MIDI_OUTPUT_QUERY = new InjectionToken<string>(
    '[WA_MIDI_OUTPUT_QUERY]: MIDIOutput object id or name',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_OUTPUT_QUERY}
 */
export const MIDI_OUTPUT_QUERY = WA_MIDI_OUTPUT_QUERY;
