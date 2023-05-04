import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-draw-image[imageSmoothingEnabled],canvas-draw-image[imageSmoothingQuality],' +
        'canvas-path[imageSmoothingEnabled],canvas-path[imageSmoothingQuality],' +
        'canvas-text[imageSmoothingEnabled],canvas-text[imageSmoothingQuality]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: ImageSmoothingDirective,
            multi: true,
        },
    ],
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
