import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-path[fillStyle],canvas-path[strokeStyle],' +
        'canvas-text[fillStyle],canvas-text[strokeStyle]',
    providers: [asCanvasProperty(FillStrokeStylesDirective)],
})
export class FillStrokeStylesDirective implements CanvasMethod {
    @Input()
    fillStyle: string | CanvasGradient | CanvasPattern = 'black';

    @Input()
    strokeStyle: string | CanvasGradient | CanvasPattern = 'transparent';

    call(context: CanvasRenderingContext2D) {
        context.fillStyle = this.fillStyle;
        context.strokeStyle = this.strokeStyle;
    }
}
