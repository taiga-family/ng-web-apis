import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: `rad`,
})
export class RadPipe implements PipeTransform {
    transform(input: number): number {
        return (input * Math.PI) / 180;
    }
}
