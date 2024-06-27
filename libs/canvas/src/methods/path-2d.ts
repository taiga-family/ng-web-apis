import {Directive, inject, Input} from '@angular/core';

import {WaDrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-path[path]',
    providers: [WaDrawService],
})
export class WaCanvasPath2d {
    private readonly method = inject(WaDrawService);

    @Input()
    public path = new Path2D();

    @Input()
    public fillRule?: CanvasFillRule;

    constructor() {
        this.method.call = context => {
            context.fill(this.path, this.fillRule);
            context.stroke(this.path);
        };
    }
}

/**
 * @deprecated: use {@link WaCanvasPath2d}
 */
export const Path2dDirective = WaCanvasPath2d;
