import {ContentChildren, Directive, Inject, Input, QueryList} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {DrawService} from '../services/draw.service';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-path:not([path])',
    providers: [DrawService],
})
export class PathDirective {
    @Input()
    closed = false;

    @Input()
    fillRule?: CanvasFillRule;

    @ContentChildren(CANVAS_METHOD as any)
    private readonly pathSteps: QueryList<CanvasMethod> = new QueryList();

    constructor(@Inject(DrawService) method: CanvasMethod) {
        method.call = context => {
            context.beginPath();

            this.pathSteps.forEach(step => {
                step.call(context);
            });

            if (this.closed) {
                context.closePath();
            }

            context.stroke();
            context.fill(this.fillRule);
        };
    }
}
