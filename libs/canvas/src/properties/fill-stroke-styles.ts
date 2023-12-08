import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        `canvas-path[fillStyle],canvas-path[strokeStyle],` +
        `canvas-text[fillStyle],canvas-text[strokeStyle]`,
    providers: [asCanvasProperty(FillStrokeStylesDirective)],
})
export class FillStrokeStylesDirective implements CanvasMethod {
    @Input()
    fillStyle: CanvasGradient | CanvasPattern | string = `black`;

    @Input()
    strokeStyle: CanvasGradient | CanvasPattern | string = `transparent`;

    call(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.fillStyle;
        context.strokeStyle = this.strokeStyle;
    }
}
