import {Directive, inject} from '@angular/core';

import {WaDrawService} from '../services/draw.service';

@Directive({
    selector: 'canvas-path[path]',
    inputs: ['path', 'fillRule'],
    providers: [WaDrawService],
})
export class WaCanvasPath2d {
    private readonly method = inject(WaDrawService);

    public path = new Path2D();
    public fillRule?: CanvasFillRule;

    constructor() {
        this.method.call = (context) => {
            context.fill(this.path, this.fillRule);
            context.stroke(this.path);
        };
    }
}
