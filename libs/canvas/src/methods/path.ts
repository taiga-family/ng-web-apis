import {ContentChildren, Directive, inject, Input, QueryList} from '@angular/core';

import type {CanvasMethod} from '../interfaces/canvas-method';
import {WaDrawService} from '../services/draw.service';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-path:not([path])',
    providers: [WaDrawService],
})
export class WaCanvasPath {
    @ContentChildren(CANVAS_METHOD)
    private readonly pathSteps = new QueryList<CanvasMethod>();

    private readonly method = inject(WaDrawService);

    @Input()
    public closed = false;

    @Input()
    public fillRule?: CanvasFillRule;

    constructor() {
        this.method.call = context => {
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

/**
 * @deprecated: use {@link WaCanvasPath}
 */
export const PathDirective = WaCanvasPath;
