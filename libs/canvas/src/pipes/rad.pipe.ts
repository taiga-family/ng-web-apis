import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'rad',
})
export class RadPipe implements PipeTransform {
    public transform(input: number): number {
        return (input * Math.PI) / 180;
    }
}
