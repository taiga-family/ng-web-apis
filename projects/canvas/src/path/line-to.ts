import {Directive, forwardRef, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-line-to',
    providers: [
        {
            provide: CANVAS_METHOD,
            useExisting: forwardRef(() => LineToDirective),
        },
    ],
})
export class LineToDirective implements CanvasMethod {
    @Input()
    x = 0;

    @Input()
    y = 0;

    call(context: CanvasRenderingContext2D) {
        context.lineTo(this.x, this.y);
    }
}
