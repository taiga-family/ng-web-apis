import {Pipe, type PipeTransform} from '@angular/core';

import {type AudioParamAutomation} from '../types/audio-param-automation';
import {type AudioParamAutomationMode} from '../types/audio-param-automation-mode';
import {type AudioParamCurve} from '../types/audio-param-curve';

@Pipe({
    standalone: true,
    name: 'waAudioParam',
})
export class WebAudioParamPipe implements PipeTransform {
    /**
     * Creates {@link AudioParamAutomation} to use with {@link AudioParam} inputs
     *
     * @param value target value
     * @param duration duration of the automation
     * @param mode either instant for given duration or linear/exponential ramp
     */
    public transform(
        value: number[] | number,
        duration: number,
        mode: AudioParamAutomationMode = 'exponential',
    ): AudioParamAutomation | AudioParamCurve {
        return value instanceof Array
            ? {
                  value,
                  duration,
              }
            : {
                  value,
                  duration,
                  mode,
              };
    }
}
