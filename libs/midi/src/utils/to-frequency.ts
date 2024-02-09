/**
 * Convert MIDI notes to frequencies
 *
 * @param note MIDI note
 * @param tuning tuning for middle A (440 by default)
 */
export function toFrequency(note: number, tuning = 440): number {
    return 2 ** ((note - 69) / 12) * tuning;
}
