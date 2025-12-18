import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-draw-image[globalAlpha],canvas-draw-image[globalCompositeOperation],' +
        'canvas-path[globalAlpha],canvas-path[globalCompositeOperation],' +
        'canvas-text[globalAlpha],canvas-text[globalCompositeOperation]',
    inputs: ['globalAlpha', 'globalCompositeOperation'],
    providers: [asCanvasProperty(WaCanvasCompositing)],
})
export class WaCanvasCompositing implements CanvasMethod, CanvasCompositing {
    public globalAlpha = 1;
    public globalCompositeOperation: GlobalCompositeOperation = 'source-over';

    public call(context: CanvasRenderingContext2D): void {
        context.globalAlpha = this.globalAlpha;
        context.globalCompositeOperation = this.globalCompositeOperation;
    }
}
