import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-rect',
    providers: [asCanvasMethod(WaCanvasRect)],
})
export class WaCanvasRect implements CanvasMethod {
    public readonly x = input(0);
    public readonly y = input(0);
    public readonly width = input(0);
    public readonly height = input(0);

    public call(context: CanvasRenderingContext2D): void {
        context.rect(this.x(), this.y(), this.width(), this.height());
    }
}

/**
 * @deprecated: use {@link WaCanvasRect}
 */
export const RectDirective = WaCanvasRect;
