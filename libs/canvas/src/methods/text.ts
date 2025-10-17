import {Directive, inject, input} from '@angular/core';

import {WaDrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-text',
    providers: [WaDrawService],
})
export class WaCanvasText {
    private readonly method = inject(WaDrawService);

    public readonly text = input('');
    public readonly x = input(0);
    public readonly y = input(0);
    public readonly maxWidth = input<number>();

    constructor() {
        this.method.call = (context) => {
            context.fillText(this.text(), this.x(), this.y(), this.maxWidth());
            context.strokeText(this.text(), this.x(), this.y(), this.maxWidth());
        };
    }
}

/**
 * @deprecated: use {@link WaCanvasText}
 */
export const TextDirective = WaCanvasText;
