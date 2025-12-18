import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-path[fillStyle],canvas-path[strokeStyle],' +
        'canvas-text[fillStyle],canvas-text[strokeStyle]',
    inputs: ['fillStyle', 'strokeStyle'],
    providers: [asCanvasProperty(WaCanvasFillStrokeStyles)],
})
export class WaCanvasFillStrokeStyles implements CanvasMethod {
    public fillStyle: CanvasGradient | CanvasPattern | string = 'black';
    public strokeStyle: CanvasGradient | CanvasPattern | string = 'transparent';

    public call(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.fillStyle;
        context.strokeStyle = this.strokeStyle;
    }
}
