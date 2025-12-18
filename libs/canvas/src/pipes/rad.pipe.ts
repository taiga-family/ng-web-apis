import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({name: 'rad'})
export class WaCanvasRadPipe implements PipeTransform {
    public transform(input: number): number {
        return (input * Math.PI) / 180;
    }
}
