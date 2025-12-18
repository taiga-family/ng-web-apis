import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-quadratic-curve-to',
    inputs: ['x', 'y', 'cpx', 'cpy'],
    providers: [asCanvasMethod(WaCanvasQuadraticCurveTo)],
})
export class WaCanvasQuadraticCurveTo implements CanvasMethod {
    public cpx = 0;
    public cpy = 0;
    public x = 0;
    public y = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
    }
}
