import {Directive, inject, input} from '@angular/core';

import {WaDrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-path[path]',
    providers: [WaDrawService],
})
export class WaCanvasPath2d {
    private readonly method = inject(WaDrawService);

    public readonly path = input(new Path2D());

    public readonly fillRule = input<CanvasFillRule>();

    constructor() {
        this.method.call = (context) => {
            context.fill(this.path(), this.fillRule());
            context.stroke(this.path());
        };
    }
}

/**
 * @deprecated: use {@link WaCanvasPath2d}
 */
export const Path2dDirective = WaCanvasPath2d;
