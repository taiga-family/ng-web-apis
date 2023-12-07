import {Pipe, PipeTransform} from '@angular/core';

import {AudioParamAutomation} from '../types/audio-param-automation';
import {AudioParamAutomationMode} from '../types/audio-param-automation-mode';
import {AudioParamCurve} from '../types/audio-param-curve';

@Pipe({
    standalone: true,
    name: `waAudioParam`,
})
export class WebAudioParamPipe implements PipeTransform {
    /**
     * Creates {@link AudioParamAutomation} to use with {@link AudioParam} inputs
     *
     * @param value target value
     * @param duration duration of the automation
     * @param mode either instant for given duration or linear/exponential ramp
     */
    transform(
        value: number[] | number,
        duration: number,
        mode: AudioParamAutomationMode = `exponential`,
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
