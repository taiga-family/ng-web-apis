import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-ellipse',
    inputs: ['x', 'y', 'radiusX', 'radiusY', 'startAngle', 'endAngle', 'anticlockwise'],
    providers: [asCanvasMethod(WaCanvasEllipse)],
})
export class WaCanvasEllipse implements CanvasMethod {
    public x = 0;
    public y = 0;
    public radiusX = 0;
    public radiusY = 0;
    public rotation = 0;
    public startAngle = 0;
    public endAngle = 0;
    public anticlockwise = false;

    public call(context: CanvasRenderingContext2D): void {
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
