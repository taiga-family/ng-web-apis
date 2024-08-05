import {InjectionToken} from '@angular/core';

export const WA_MIDI_OUTPUT = new InjectionToken<Promise<MIDIOutput | undefined>>(
    '[WA_MIDI_OUTPUT]',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_OUTPUT}
 */
export const MIDI_OUTPUT = WA_MIDI_OUTPUT;
