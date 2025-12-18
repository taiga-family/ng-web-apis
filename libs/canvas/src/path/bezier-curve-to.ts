import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-bezier-curve-to',
    inputs: ['cp1x', 'cp1y', 'cp2x', 'cp2y', 'x', 'y'],
    providers: [asCanvasMethod(WaCanvasBezierCurveTo)],
})
export class WaCanvasBezierCurveTo implements CanvasMethod {
    public cp1x = 0;
    public cp1y = 0;
    public cp2x = 0;
    public cp2y = 0;
    public x = 0;
    public y = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
    }
}
