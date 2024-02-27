import {Directive, inject, Input} from '@angular/core';

import {DrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-path[path]',
    providers: [DrawService],
})
export class Path2dDirective {
    private readonly method = inject(DrawService);

    @Input()
    path = new Path2D();

    @Input()
    fillRule?: CanvasFillRule;

    constructor() {
        this.method.call = context => {
            context.fill(this.path, this.fillRule);
            context.stroke(this.path);
        };
    }
}
