import {InjectionToken} from '@angular/core';

export const WA_MIDI_INPUT_QUERY = new InjectionToken<string>('[WA_MIDI_INPUT_QUERY]');

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_INPUT_QUERY}
 */
export const MIDI_INPUT_QUERY = WA_MIDI_INPUT_QUERY;
