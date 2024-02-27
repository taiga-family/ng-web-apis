import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-line-to',
    providers: [asCanvasMethod(LineToDirective)],
})
export class LineToDirective implements CanvasMethod {
    @Input()
    public x = 0;

    @Input()
    public y = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.lineTo(this.x, this.y);
    }
}
