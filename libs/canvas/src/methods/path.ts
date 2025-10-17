import {contentChildren, Directive, inject, input} from '@angular/core';

import {WaDrawService} from '../services/draw.service';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-path:not([path])',
    providers: [WaDrawService],
})
export class WaCanvasPath {
    private readonly pathSteps = contentChildren(CANVAS_METHOD);

    private readonly method = inject(WaDrawService);

    public readonly closed = input(false);

    public readonly fillRule = input<CanvasFillRule>();

    constructor() {
        this.method.call = (context) => {
            context.beginPath();

            this.pathSteps().forEach((step) => {
                step.call(context);
            });

            if (this.closed()) {
                context.closePath();
            }

            context.stroke();
            context.fill(this.fillRule());
        };
    }
}

/**
 * @deprecated: use {@link WaCanvasPath}
 */
export const PathDirective = WaCanvasPath;
