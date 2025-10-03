import {Directive, Input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector: 'canvas-draw-image[filter],canvas-path[filter],canvas-text[filter]',
    providers: [asCanvasProperty(WaCanvasFilter)],
})
export class WaCanvasFilter implements CanvasMethod, CanvasFilters {
    @Input()
    public filter = 'none';

    public call(context: CanvasRenderingContext2D): void {
        context.filter = this.filter;
    }
}

/**
 * @deprecated: use {@link WaCanvasFilter}
 */
export const FilterDirective = WaCanvasFilter;
