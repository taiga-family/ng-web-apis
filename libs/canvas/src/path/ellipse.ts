import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: `canvas-ellipse`,
    providers: [asCanvasMethod(EllipseDirective)],
})
export class EllipseDirective implements CanvasMethod {
    @Input()
    x = 0;

    @Input()
    y = 0;

    @Input()
    radiusX = 0;

    @Input()
    radiusY = 0;

    @Input()
    rotation = 0;

    @Input()
    startAngle = 0;

    @Input()
    endAngle = 0;

    @Input()
    anticlockwise = false;

    call(context: CanvasRenderingContext2D): void {
        context.ellipse(
            this.x,
            this.y,
            this.radiusX,
            this.radiusY,
            this.rotation,
            this.startAngle,
            this.endAngle,
            this.anticlockwise,
        );
    }
}
