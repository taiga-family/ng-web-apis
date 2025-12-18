import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-move-to',
    inputs: ['x', 'y'],
    providers: [asCanvasMethod(WaCanvasMoveTo)],
})
export class WaCanvasMoveTo implements CanvasMethod {
    public x = 0;
    public y = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.moveTo(this.x, this.y);
    }
}
