import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-arc-to',
    providers: [asCanvasMethod(WaCanvasArcTo)],
})
export class WaCanvasArcTo implements CanvasMethod {
    public readonly x1 = input(0);
    public readonly y1 = input(0);
    public readonly x2 = input(0);
    public readonly y2 = input(0);
    public readonly radius = input(0);

    public call(context: CanvasRenderingContext2D): void {
        context.arcTo(this.x1(), this.y1(), this.x2(), this.y2(), this.radius());
    }
}

/**
 * @deprecated: use {@link WaCanvasArcTo}
 */
export const ArcToDirective = WaCanvasArcTo;
