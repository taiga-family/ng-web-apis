import {Directive, Input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-ellipse',
    providers: [asCanvasMethod(WaCanvasEllipse)],
})
export class WaCanvasEllipse implements CanvasMethod {
    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public radiusX = 0;

    @Input()
    public radiusY = 0;

    @Input()
    public rotation = 0;

    @Input()
    public startAngle = 0;

    @Input()
    public endAngle = 0;

    @Input()
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

/**
 * @deprecated: use {@link WaCanvasEllipse}
 */
export const EllipseDirective = WaCanvasEllipse;
