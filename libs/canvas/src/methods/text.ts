import {Directive, inject, Input} from '@angular/core';

import {WaDrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-text',
    providers: [WaDrawService],
})
export class WaCanvasText {
    private readonly method = inject(WaDrawService);

    @Input()
    public text = '';

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public maxWidth?: number;

    constructor() {
        this.method.call = (context) => {
            context.fillText(this.text, this.x, this.y, this.maxWidth);
            context.strokeText(this.text, this.x, this.y, this.maxWidth);
        };
    }
}

/**
 * @deprecated: use {@link WaCanvasText}
 */
export const TextDirective = WaCanvasText;
