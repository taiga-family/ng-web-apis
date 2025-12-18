import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector: 'canvas-draw-image[filter],canvas-path[filter],canvas-text[filter]',
    inputs: ['filter'],
    providers: [asCanvasProperty(WaCanvasFilter)],
})
export class WaCanvasFilter implements CanvasMethod, CanvasFilters {
    public filter = 'none';

    public call(context: CanvasRenderingContext2D): void {
        context.filter = this.filter;
    }
}
