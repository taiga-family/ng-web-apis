import {Directive, Inject, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {DrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-path[path]',
    providers: [DrawService],
})
export class Path2dDirective {
    @Input()
    path = new Path2D();

    @Input()
    fillRule?: CanvasFillRule;

    constructor(@Inject(DrawService) method: CanvasMethod) {
        method.call = context => {
            context.fill(this.path, this.fillRule);
            context.stroke(this.path);
        };
    }
}
