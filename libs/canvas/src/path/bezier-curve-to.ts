import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-bezier-curve-to',
    providers: [asCanvasMethod(WaCanvasBezierCurveTo)],
})
export class WaCanvasBezierCurveTo implements CanvasMethod {
    public readonly cp1x = input(0);
    public readonly cp1y = input(0);
    public readonly cp2x = input(0);
    public readonly cp2y = input(0);
    public readonly x = input(0);
    public readonly y = input(0);

    public call(context: CanvasRenderingContext2D): void {
        context.bezierCurveTo(
            this.cp1x(),
            this.cp1y(),
            this.cp2x(),
            this.cp2y(),
            this.x(),
            this.y(),
        );
    }
}

/**
 * @deprecated use {@link WaCanvasBezierCurveTo}
 */
export const BezierCurveToDirective = WaCanvasBezierCurveTo;
