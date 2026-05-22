import {contentChildren, Directive, inject} from '@angular/core';

import {WaDrawService} from '../services/draw.service';
import {WA_CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-path:not([path])',
    inputs: ['closed', 'fillRule'],
    providers: [WaDrawService],
})
export class WaCanvasPath {
    private readonly pathSteps = contentChildren(WA_CANVAS_METHOD);
    private readonly method = inject(WaDrawService);

    public closed = false;
    public fillRule?: CanvasFillRule;

    constructor() {
        this.method.call = (context) => {
            context.beginPath();

            this.pathSteps().forEach((step) => {
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
