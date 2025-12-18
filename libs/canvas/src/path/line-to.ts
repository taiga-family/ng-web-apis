import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-line-to',
    inputs: ['x', 'y'],
    providers: [asCanvasMethod(WaCanvasLineTo)],
})
export class WaCanvasLineTo implements CanvasMethod {
    public x = 0;
    public y = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.lineTo(this.x, this.y);
    }
}
