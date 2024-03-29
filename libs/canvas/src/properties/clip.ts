import {Directive, Input} from '@angular/core';

import type {CanvasMethod} from '../interfaces/canvas-method';
import {ClipPathComponent} from '../methods/clip-path';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-draw-image[clip],canvas-draw-image[clipFillRule],' +
        'canvas-path[clip],canvas-path[clipFillRule],' +
        'canvas-text[clip],canvas-text[clipFillRule]',
    providers: [asCanvasProperty(ClipDirective)],
})
export class ClipDirective implements CanvasMethod {
    @Input()
    public clip: ClipPathComponent | Path2D = new Path2D();

    @Input()
    public clipFillRule?: CanvasFillRule;

    public call(context: CanvasRenderingContext2D): void {
        if (this.clip instanceof ClipPathComponent) {
            context.beginPath();

            this.clip.pathSteps.forEach(step => {
                step.call(context);
            });

            context.clip(this.clipFillRule);
        } else {
            context.clip(this.clip, this.clipFillRule);
        }
    }
}
