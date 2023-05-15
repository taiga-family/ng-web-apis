import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-rect',
    providers: [asCanvasMethod(RectDirective)],
})
export class RectDirective implements CanvasMethod {
    @Input()
    x = 0;

    @Input()
    y = 0;

    @Input()
    width = 0;

    @Input()
    height = 0;

    call(context: CanvasRenderingContext2D) {
        context.rect(this.x, this.y, this.width, this.height);
    }
}
