import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-ellipse',
    providers: [asCanvasMethod(WaCanvasEllipse)],
})
export class WaCanvasEllipse implements CanvasMethod {
    public readonly x = input(0);
    public readonly y = input(0);
    public readonly radiusX = input(0);
    public readonly radiusY = input(0);
    public readonly rotation = input(0);
    public readonly startAngle = input(0);
    public readonly endAngle = input(0);
    public readonly anticlockwise = input(false);

    public call(context: CanvasRenderingContext2D): void {
        context.ellipse(
            this.x(),
            this.y(),
            this.radiusX(),
            this.radiusY(),
            this.rotation(),
            this.startAngle(),
            this.endAngle(),
            this.anticlockwise(),
        );
    }
}

/**
 * @deprecated: use {@link WaCanvasEllipse}
 */
export const EllipseDirective = WaCanvasEllipse;
