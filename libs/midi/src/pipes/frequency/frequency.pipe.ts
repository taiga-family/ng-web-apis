import {Pipe, type PipeTransform} from '@angular/core';

import {toFrequency} from '../../utils/to-frequency';

@Pipe({name: 'frequency'})
export class FrequencyPipe implements PipeTransform {
    public readonly transform = toFrequency;
}
