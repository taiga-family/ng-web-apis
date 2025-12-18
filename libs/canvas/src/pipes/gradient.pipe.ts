import {inject, Pipe, type PipeTransform} from '@angular/core';

import {WA_CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Pipe({name: 'gradient'})
export class WaCanvasGradientPipe implements PipeTransform {
    private readonly context = inject(WA_CANVAS_2D_CONTEXT);

    public transform(
        stops: Map<number, string>,
        x0: number,
        y0: number,
        x1: number,
        y1: number,
    ): CanvasGradient;
    public transform(
        stops: Map<number, string>,
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number,
    ): CanvasGradient;
    // eslint-disable-next-line max-params,@typescript-eslint/max-params
    public transform(
        stops: Map<number, string>,
        a1: number,
        a2: number,
        a3: number,
        a4: number,
        a5?: number,
        a6?: number,
    ): CanvasGradient {
        const gradient =
            a5 !== undefined && a6 !== undefined
                ? this.context.createRadialGradient(a1, a2, a3, a4, a5, a6)
                : this.context.createLinearGradient(a1, a2, a3, a4);

        Array.from(stops.keys()).forEach((stop) =>
            gradient.addColorStop(stop, stops.get(stop) ?? ''),
        );

        return gradient;
    }
}
