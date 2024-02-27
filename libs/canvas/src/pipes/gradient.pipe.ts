import {inject, Pipe, PipeTransform} from '@angular/core';

import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Pipe({
    standalone: true,
    name: 'gradient',
})
export class GradientPipe implements PipeTransform {
    private readonly context = inject(CANVAS_2D_CONTEXT);

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

        Array.from(stops.keys()).forEach(stop =>
            gradient.addColorStop(stop, stops.get(stop) || ''),
        );

        return gradient;
    }
}
