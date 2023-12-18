import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-quadratic-curve-to',
    providers: [asCanvasMethod(QuadraticCurveToDirective)],
})
export class QuadraticCurveToDirective implements CanvasMethod {
    @Input()
    cpx = 0;

    @Input()
    cpy = 0;

    @Input()
    x = 0;

    @Input()
    y = 0;

    call(context: CanvasRenderingContext2D): void {
        context.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
    }
}
