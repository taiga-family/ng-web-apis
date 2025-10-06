import {Directive, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector: 'canvas-draw-image[filter],canvas-path[filter],canvas-text[filter]',
    providers: [asCanvasProperty(WaCanvasFilter)],
})
export class WaCanvasFilter implements CanvasMethod, CanvasFilters {
    public filter = 'none';

    public readonly inputFilter = input(this.filter, {
        alias: 'filter',
        transform: (value: string) => {
            this.filter = value;

            return value;
        },
    });

    public call(context: CanvasRenderingContext2D): void {
        context.filter = this.inputFilter();
    }
}

/**
 * @deprecated: use {@link WaCanvasFilter}
 */
export const FilterDirective = WaCanvasFilter;
