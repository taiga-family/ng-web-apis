import {Directive, Input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-move-to',
    providers: [asCanvasMethod(WaCanvasMoveTo)],
})
export class WaCanvasMoveTo implements CanvasMethod {
    @Input()
    public x = 0;

    @Input()
    public y = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.moveTo(this.x, this.y);
    }
}

/**
 * @deprecated: use {@link WaCanvasMoveTo}
 */
export const MoveToDirective = WaCanvasMoveTo;
