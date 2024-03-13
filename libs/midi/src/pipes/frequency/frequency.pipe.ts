import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

import {toFrequency} from '../../utils/to-frequency';

@Pipe({
    standalone: true,
    name: 'frequency',
})
export class FrequencyPipe implements PipeTransform {
    public transform(note: number, tuning?: number): number {
        return toFrequency(note, tuning);
    }
}
