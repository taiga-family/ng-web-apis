import {Directive, effect, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-draw-image[globalAlpha],canvas-draw-image[globalCompositeOperation],' +
        'canvas-path[globalAlpha],canvas-path[globalCompositeOperation],' +
        'canvas-text[globalAlpha],canvas-text[globalCompositeOperation]',
    providers: [asCanvasProperty(WaCanvasCompositing)],
})
export class WaCanvasCompositing implements CanvasMethod, CanvasCompositing {
    protected readonly $ = effect(() => {
        this.globalAlpha = this.inputGlobalAlpha();
        this.globalCompositeOperation = this.inputGlobalCompositeOperation();
    });

    public readonly inputGlobalAlpha = input(1, {alias: 'globalAlpha'});

    public readonly inputGlobalCompositeOperation = input<GlobalCompositeOperation>(
        'source-over',
        {alias: 'globalCompositeOperation'},
    );

    public globalAlpha = this.inputGlobalAlpha();
    public globalCompositeOperation = this.inputGlobalCompositeOperation();

    public call(context: CanvasRenderingContext2D): void {
        context.globalAlpha = this.globalAlpha;
        context.globalCompositeOperation = this.globalCompositeOperation;
    }
}

/**
 * @deprecated: use {@link WaCanvasCompositing}
 */
export const CompositingDirective = WaCanvasCompositing;
