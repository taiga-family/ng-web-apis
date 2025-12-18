import {Directive, inject} from '@angular/core';

import {WaDrawService} from '../services/draw.service';

@Directive({
    selector: 'canvas-text',
    inputs: ['text', 'x', 'y', 'maxWidth'],
    providers: [WaDrawService],
})
export class WaCanvasText {
    private readonly method = inject(WaDrawService);

    public text = '';
    public x = 0;
    public y = 0;
    public maxWidth?: number;

    constructor() {
        this.method.call = (context) => {
            context.fillText(this.text, this.x, this.y, this.maxWidth);
            context.strokeText(this.text, this.x, this.y, this.maxWidth);
        };
    }
}
