import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-draw-image[imageSmoothingEnabled],canvas-draw-image[imageSmoothingQuality],' +
        'canvas-path[imageSmoothingEnabled],canvas-path[imageSmoothingQuality],' +
        'canvas-text[imageSmoothingEnabled],canvas-text[imageSmoothingQuality]',
    inputs: ['imageSmoothingEnabled', 'imageSmoothingQuality'],
    providers: [asCanvasProperty(WaCanvasImageSmoothing)],
})
export class WaCanvasImageSmoothing implements CanvasMethod, CanvasImageSmoothing {
    public imageSmoothingEnabled = true;
    public imageSmoothingQuality: ImageSmoothingQuality = 'low';

    public call(context: CanvasRenderingContext2D): void {
        context.imageSmoothingEnabled = this.imageSmoothingEnabled;
        context.imageSmoothingQuality = this.imageSmoothingQuality;
    }
}
