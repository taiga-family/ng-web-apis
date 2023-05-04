import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-draw-image[globalAlpha],canvas-draw-image[globalCompositeOperation],' +
        'canvas-path[globalAlpha],canvas-path[globalCompositeOperation],' +
        'canvas-text[globalAlpha],canvas-text[globalCompositeOperation]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: CompositingDirective,
            multi: true,
        },
    ],
})
export class CompositingDirective implements CanvasMethod, CanvasCompositing {
    @Input()
    globalAlpha = 1;

    @Input()
    globalCompositeOperation = 'source-over';

    call(context: CanvasRenderingContext2D) {
        context.globalAlpha = this.globalAlpha;
        context.globalCompositeOperation = this.globalCompositeOperation;
    }
}
