import {Directive, Input} from '@angular/core';

import type {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-rect',
    providers: [asCanvasMethod(WaCanvasRect)],
})
export class WaCanvasRect implements CanvasMethod {
    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public width = 0;

    @Input()
    public height = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.rect(this.x, this.y, this.width, this.height);
    }
}

/**
 * @deprecated: use {@link WaCanvasRect}
 */
export const RectDirective = WaCanvasRect;
