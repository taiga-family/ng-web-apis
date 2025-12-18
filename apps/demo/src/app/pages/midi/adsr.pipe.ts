import {Pipe, type PipeTransform} from '@angular/core';
import {type AudioParamInput} from '@ng-web-apis/audio';

@Pipe({
    name: 'adsr',
})
export class AdsrPipe implements PipeTransform {
    public transform(
        value: number,
        attack: number,
        decay: number,
        sustain: number,
        release: number,
    ): AudioParamInput {
        return value
            ? [
                  {
                      value: 0,
                      duration: 0,
                      mode: 'instant',
                  },
                  {
                      value,
                      duration: attack,
                      mode: 'linear',
                  },
                  {
                      value: sustain,
                      duration: decay,
                      mode: 'linear',
                  },
              ]
            : {
                  value: 0,
                  duration: release,
                  mode: 'linear',
              };
    }
}
