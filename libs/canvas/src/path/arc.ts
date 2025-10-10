import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-arc',
    providers: [asCanvasMethod(WaCanvasArc)],
})
export class WaCanvasArc implements CanvasMethod {
    public readonly x = input(0);
    public readonly y = input(0);
    public readonly radius = input(0);
    public readonly startAngle = input(0);
    public readonly endAngle = input(0);
    public readonly anticlockwise = input(false);

    public call(context: CanvasRenderingContext2D): void {
        context.arc(
            this.x(),
            this.y(),
            this.radius(),
            this.startAngle(),
            this.endAngle(),
            this.anticlockwise(),
        );
    }
}

/**
 * @deprecated: use {@link WaCanvasArc}
 */
export const ArcDirective = WaCanvasArc;
