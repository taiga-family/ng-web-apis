import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-line-to',
    providers: [asCanvasMethod(LineToDirective)],
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
