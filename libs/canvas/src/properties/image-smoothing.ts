import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-draw-image[imageSmoothingEnabled],canvas-draw-image[imageSmoothingQuality],' +
        'canvas-path[imageSmoothingEnabled],canvas-path[imageSmoothingQuality],' +
        'canvas-text[imageSmoothingEnabled],canvas-text[imageSmoothingQuality]',
    providers: [asCanvasProperty(ImageSmoothingDirective)],
})
export class ImageSmoothingDirective implements CanvasMethod, CanvasImageSmoothing {
    @Input()
    imageSmoothingEnabled = true;

    @Input()
    imageSmoothingQuality: ImageSmoothingQuality = 'low';

    call(context: CanvasRenderingContext2D) {
        context.imageSmoothingEnabled = this.imageSmoothingEnabled;
        context.imageSmoothingQuality = this.imageSmoothingQuality;
    }
}
