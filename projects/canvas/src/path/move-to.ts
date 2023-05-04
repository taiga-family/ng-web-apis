import {Directive, forwardRef, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-move-to',
    providers: [
        {
            provide: CANVAS_METHOD,
            useExisting: forwardRef(() => MoveToDirective),
        },
    ],
})
export class MoveToDirective implements CanvasMethod {
    @Input()
    x = 0;

    @Input()
    y = 0;

    call(context: CanvasRenderingContext2D) {
        context.moveTo(this.x, this.y);
    }
}
