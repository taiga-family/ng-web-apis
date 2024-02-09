const COEFFICIENT = 2 ** (1 / 12);

/**
 * Convert frequencies to MIDI notes
 *
 * @param frequency
 * @param tuning tuning for middle A (440 by default)
 */
export function toNote(frequency: number, tuning = 440): number {
    return Math.round(Math.log(frequency / tuning) / Math.log(COEFFICIENT)) + 69;
}
