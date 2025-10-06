import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-line-to',
    providers: [asCanvasMethod(WaCanvasLineTo)],
})
export class WaCanvasLineTo implements CanvasMethod {
    public readonly x = input(0);
    public readonly y = input(0);

    public call(context: CanvasRenderingContext2D): void {
        context.lineTo(this.x(), this.y());
    }
}

/**
 * @deprecated: use {@link WaCanvasLineTo}
 */
export const LineToDirective = WaCanvasLineTo;
