import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {AudioParamInput} from '@ng-web-apis/audio';

@Pipe({
    standalone: true,
    name: 'adsr',
})
export class AdsrPipe implements PipeTransform {
    // eslint-disable-next-line @typescript-eslint/max-params
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
