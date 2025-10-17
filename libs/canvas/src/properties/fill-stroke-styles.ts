import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-path[fillStyle],canvas-path[strokeStyle],' +
        'canvas-text[fillStyle],canvas-text[strokeStyle]',
    providers: [asCanvasProperty(WaCanvasFillStrokeStyles)],
})
export class WaCanvasFillStrokeStyles implements CanvasMethod {
    public readonly fillStyle = input<CanvasGradient | CanvasPattern | string>('black');
    public readonly strokeStyle = input<CanvasGradient | CanvasPattern | string>(
        'transparent',
    );

    public call(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.fillStyle();
        context.strokeStyle = this.strokeStyle();
    }
}

/**
 * @deprecated: use {@link WaCanvasFillStrokeStyles}
 */
export const FillStrokeStylesDirective = WaCanvasFillStrokeStyles;
