import {Directive, Input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-arc',
    providers: [asCanvasMethod(WaCanvasArc)],
})
export class WaCanvasArc implements CanvasMethod {
    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public radius = 0;

    @Input()
    public startAngle = 0;

    @Input()
    public endAngle = 0;

    @Input()
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

/**
 * @deprecated: use {@link WaCanvasArc}
 */
export const ArcDirective = WaCanvasArc;
