import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-arc-to',
    providers: [asCanvasMethod(ArcToDirective)],
})
export class ArcToDirective implements CanvasMethod {
    @Input()
    public x1 = 0;

    @Input()
    public y1 = 0;

    @Input()
    public x2 = 0;

    @Input()
    public y2 = 0;

    @Input()
    public radius = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
    }
}
