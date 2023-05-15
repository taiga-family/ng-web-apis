import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-arc-to',
    providers: [asCanvasMethod(ArcToDirective)],
})
export class ArcToDirective implements CanvasMethod {
    @Input()
    x1 = 0;

    @Input()
    y1 = 0;

    @Input()
    x2 = 0;

    @Input()
    y2 = 0;

    @Input()
    radius = 0;

    call(context: CanvasRenderingContext2D) {
        context.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
    }
}
