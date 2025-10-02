import {type AudioParamAutomation} from '../types/audio-param-automation';
import {type AudioParamCurve} from '../types/audio-param-curve';
import {type AudioParamInput} from '../types/audio-param-input';

export function processAudioParam(
    param: AudioParam,
    value: AudioParamInput,
    currentTime = 0,
): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (param.cancelAndHoldAtTime) {
        param.cancelAndHoldAtTime(currentTime);
    } else {
        param.cancelScheduledValues(currentTime);
        param.setValueAtTime(guard(param.value), currentTime);
    }

    if (typeof value === 'number') {
        param.setValueAtTime(guard(value), currentTime);

        return;
    }

    if (value instanceof Array) {
        processSchedule(param, value, currentTime);

        return;
    }

    if (!('mode' in value)) {
        param.setValueCurveAtTime(value.value, currentTime, value.duration);

        return;
    }

    param.setValueAtTime(guard(param.value), currentTime);
    processAutomation(param, value, currentTime);
}

function processSchedule(
    param: AudioParam,
    value: Array<AudioParamAutomation | AudioParamCurve>,
    currentTime: number,
): void {
    value.forEach((automation) => {
        if ('mode' in automation) {
            processAutomation(param, automation, currentTime);
        } else {
            param.setValueCurveAtTime(automation.value, currentTime, automation.duration);
        }

        currentTime += automation.duration;
    });
}

function processAutomation(
    param: AudioParam,
    {value, mode = 'instant', duration}: AudioParamAutomation,
    currentTime: number,
): void {
    switch (mode) {
        case 'exponential':
            if (value < 0 || value * param.value < 0) {
                param.linearRampToValueAtTime(guard(value), currentTime + duration);
            } else {
                param.exponentialRampToValueAtTime(guard(value), currentTime + duration);
            }

            param.setValueAtTime(guard(value), currentTime + duration);
            break;
        case 'instant':
            param.setValueAtTime(guard(value), currentTime);
            param.setValueAtTime(guard(value), currentTime + duration);
            break;
        case 'linear':
            param.linearRampToValueAtTime(guard(value), currentTime + duration);
            break;
    }
}

function guard(v: number): number {
    return v || 0.00000001;
}
