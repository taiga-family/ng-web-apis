import {Directive, effect, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-draw-image[imageSmoothingEnabled],canvas-draw-image[imageSmoothingQuality],' +
        'canvas-path[imageSmoothingEnabled],canvas-path[imageSmoothingQuality],' +
        'canvas-text[imageSmoothingEnabled],canvas-text[imageSmoothingQuality]',
    providers: [asCanvasProperty(WaCanvasImageSmoothing)],
})
export class WaCanvasImageSmoothing implements CanvasMethod, CanvasImageSmoothing {
    protected readonly $ = effect(() => {
        this.imageSmoothingEnabled = this.inputImageSmoothingEnabled();
        this.imageSmoothingQuality = this.inputImageSmoothingQuality();
    });

    public readonly inputImageSmoothingEnabled = input(true, {
        alias: 'imageSmoothingEnabled',
    });

    public readonly inputImageSmoothingQuality = input<ImageSmoothingQuality>('low', {
        alias: 'imageSmoothingQuality',
    });

    public imageSmoothingEnabled = this.inputImageSmoothingEnabled();
    public imageSmoothingQuality = this.inputImageSmoothingQuality();

    public call(context: CanvasRenderingContext2D): void {
        context.imageSmoothingEnabled = this.imageSmoothingEnabled;
        context.imageSmoothingQuality = this.imageSmoothingQuality;
    }
}

/**
 * @deprecated: use {@link WaCanvasImageSmoothing}
 */
export const ImageSmoothingDirective = WaCanvasImageSmoothing;
