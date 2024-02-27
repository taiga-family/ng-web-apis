import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-arc',
    providers: [asCanvasMethod(ArcDirective)],
})
export class ArcDirective implements CanvasMethod {
    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public radius = 0;

    @Input()
    public startAngle = 0;

    @Input()
    public endAngle = 0;

    @Input()
    public anticlockwise = false;

    public call(context: CanvasRenderingContext2D): void {
        context.arc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.anticlockwise,
        );
    }
}
