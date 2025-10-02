import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'rad',
})
export class WaCanvasRadPipe implements PipeTransform {
    public transform(input: number): number {
        return (input * Math.PI) / 180;
    }
}

/**
 * @deprecated: use {@link WaCanvasRadPipe}
 */
export const RadPipe = WaCanvasRadPipe;
