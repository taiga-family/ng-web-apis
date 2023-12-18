import {AudioParamInput} from '../types/audio-param-input';

export function fallbackAudioParam(value?: AudioParamInput): number {
    if (!value) {
        return 0;
    }

    if (typeof value === 'number') {
        return value;
    }

    if (value instanceof Array) {
        const last = value[value.length - 1].value;

        return typeof last === 'number' ? last : last[last.length - 1];
    }

    if (value.value instanceof Array) {
        return value.value[value.value.length - 1];
    }

    return value.value;
}
