import {Directive, Input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-quadratic-curve-to',
    providers: [asCanvasMethod(WaCanvasQuadraticCurveTo)],
})
export class WaCanvasQuadraticCurveTo implements CanvasMethod {
    @Input()
    public cpx = 0;

    @Input()
    public cpy = 0;

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
    }
}

/**
 * @deprecated: use {@link WaCanvasQuadraticCurveTo}
 */
export const QuadraticCurveToDirective = WaCanvasQuadraticCurveTo;
