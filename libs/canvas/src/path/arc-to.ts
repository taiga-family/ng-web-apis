import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-arc-to',
    inputs: ['x1', 'y1', 'x2', 'y2', 'radius'],
    providers: [asCanvasMethod(WaCanvasArcTo)],
})
export class WaCanvasArcTo implements CanvasMethod {
    public x1 = 0;
    public y1 = 0;
    public x2 = 0;
    public y2 = 0;
    public radius = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
    }
}
