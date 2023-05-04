import {Pipe, PipeTransform} from '@angular/core';
import {toFrequency} from '../../utils/to-frequency';

@Pipe({
    name: 'frequency',
})
export class FrequencyPipe implements PipeTransform {
    transform(note: number, tuning?: number): number {
        return toFrequency(note, tuning);
    }
}
