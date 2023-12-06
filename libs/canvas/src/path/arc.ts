import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: `canvas-arc`,
    providers: [asCanvasMethod(ArcDirective)],
})
export class ArcDirective implements CanvasMethod {
    @Input()
    x = 0;

    @Input()
    y = 0;

    @Input()
    radius = 0;

    @Input()
    startAngle = 0;

    @Input()
    endAngle = 0;

    @Input()
    anticlockwise = false;

    call(context: CanvasRenderingContext2D): void {
        context.arc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.anticlockwise,
        );
    }
}
