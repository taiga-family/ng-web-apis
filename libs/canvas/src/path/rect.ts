import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    selector: 'canvas-rect',
    inputs: ['x', 'y', 'width', 'height'],
    providers: [asCanvasMethod(WaCanvasRect)],
})
export class WaCanvasRect implements CanvasMethod {
    public x = 0;
    public y = 0;
    public width = 0;
    public height = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.rect(this.x, this.y, this.width, this.height);
    }
}
