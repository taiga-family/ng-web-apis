import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        `canvas-draw-image[globalAlpha],canvas-draw-image[globalCompositeOperation],` +
        `canvas-path[globalAlpha],canvas-path[globalCompositeOperation],` +
        `canvas-text[globalAlpha],canvas-text[globalCompositeOperation]`,
    providers: [asCanvasProperty(CompositingDirective)],
})
export class CompositingDirective implements CanvasMethod, CanvasCompositing {
    @Input()
    globalAlpha = 1;

    @Input()
    globalCompositeOperation: GlobalCompositeOperation = `source-over`;

    call(context: CanvasRenderingContext2D): void {
        context.globalAlpha = this.globalAlpha;
        context.globalCompositeOperation = this.globalCompositeOperation;
    }
}
