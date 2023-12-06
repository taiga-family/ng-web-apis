import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: `canvas-move-to`,
    providers: [asCanvasMethod(MoveToDirective)],
})
export class MoveToDirective implements CanvasMethod {
    @Input()
    x = 0;

    @Input()
    y = 0;

    call(context: CanvasRenderingContext2D): void {
        context.moveTo(this.x, this.y);
    }
}
