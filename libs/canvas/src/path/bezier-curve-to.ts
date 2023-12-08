import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: `canvas-bezier-curve-to`,
    providers: [asCanvasMethod(BezierCurveToDirective)],
})
export class BezierCurveToDirective implements CanvasMethod {
    @Input()
    cp1x = 0;

    @Input()
    cp1y = 0;

    @Input()
    cp2x = 0;

    @Input()
    cp2y = 0;

    @Input()
    x = 0;

    @Input()
    y = 0;

    call(context: CanvasRenderingContext2D): void {
        context.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
    }
}
