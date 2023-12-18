import type {AudioParamInput} from '../types/audio-param-input';

export function parse(value: AudioParamInput | string | null, fallback: number): number {
    const parsed = parseFloat((value as string) || '');

    return Number.isNaN(parsed) ? fallback : parsed;
}
