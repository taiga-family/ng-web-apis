import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-quadratic-curve-to',
    providers: [asCanvasMethod(WaCanvasQuadraticCurveTo)],
})
export class WaCanvasQuadraticCurveTo implements CanvasMethod {
    public readonly cpx = input(0);
    public readonly cpy = input(0);
    public readonly x = input(0);
    public readonly y = input(0);

    public call(context: CanvasRenderingContext2D): void {
        context.quadraticCurveTo(this.cpx(), this.cpy(), this.x(), this.y());
    }
}

/**
 * @deprecated: use {@link WaCanvasQuadraticCurveTo}
 */
export const QuadraticCurveToDirective = WaCanvasQuadraticCurveTo;
