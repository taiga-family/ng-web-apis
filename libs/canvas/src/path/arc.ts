import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-arc',
    inputs: ['x', 'y', 'radius', 'startAngle', 'endAngle', 'anticlockwise'],
    providers: [asCanvasMethod(WaCanvasArc)],
})
export class WaCanvasArc implements CanvasMethod {
    public x = 0;
    public y = 0;
    public radius = 0;
    public startAngle = 0;
    public endAngle = 0;
    public anticlockwise = false;

    public call(context: CanvasRenderingContext2D): void {
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
