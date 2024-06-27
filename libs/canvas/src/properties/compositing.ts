import {Directive, Input} from '@angular/core';

import type {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-draw-image[globalAlpha],canvas-draw-image[globalCompositeOperation],' +
        'canvas-path[globalAlpha],canvas-path[globalCompositeOperation],' +
        'canvas-text[globalAlpha],canvas-text[globalCompositeOperation]',
    providers: [asCanvasProperty(WaCanvasCompositing)],
})
export class WaCanvasCompositing implements CanvasMethod, CanvasCompositing {
    @Input()
    public globalAlpha = 1;

    @Input()
    public globalCompositeOperation: GlobalCompositeOperation = 'source-over';

    public call(context: CanvasRenderingContext2D): void {
        context.globalAlpha = this.globalAlpha;
        context.globalCompositeOperation = this.globalCompositeOperation;
    }
}

/**
 * @deprecated: use {@link WaCanvasCompositing}
 */
export const CompositingDirective = WaCanvasCompositing;
