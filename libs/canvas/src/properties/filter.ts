import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector: 'canvas-draw-image[filter],canvas-path[filter],canvas-text[filter]',
    providers: [asCanvasProperty(FilterDirective)],
})
export class FilterDirective implements CanvasMethod, CanvasFilters {
    @Input()
    filter = 'none';

    call(context: CanvasRenderingContext2D) {
        context.filter = this.filter;
    }
}
