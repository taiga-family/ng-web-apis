import {Directive, Input} from '@angular/core';

import type {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-path[fillStyle],canvas-path[strokeStyle],' +
        'canvas-text[fillStyle],canvas-text[strokeStyle]',
    providers: [asCanvasProperty(FillStrokeStylesDirective)],
})
export class FillStrokeStylesDirective implements CanvasMethod {
    @Input()
    public fillStyle: CanvasGradient | CanvasPattern | string = 'black';

    @Input()
    public strokeStyle: CanvasGradient | CanvasPattern | string = 'transparent';

    public call(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.fillStyle;
        context.strokeStyle = this.strokeStyle;
    }
}
