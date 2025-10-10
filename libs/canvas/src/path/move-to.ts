import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-move-to',
    providers: [asCanvasMethod(WaCanvasMoveTo)],
})
export class WaCanvasMoveTo implements CanvasMethod {
    public readonly x = input(0);
    public readonly y = input(0);

    public call(context: CanvasRenderingContext2D): void {
        context.moveTo(this.x(), this.y());
    }
}

/**
 * @deprecated: use {@link WaCanvasMoveTo}
 */
export const MoveToDirective = WaCanvasMoveTo;
