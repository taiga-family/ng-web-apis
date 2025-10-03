import {Directive, Input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {WaCanvasClipPath} from '../methods/clip-path';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-draw-image[clip],canvas-draw-image[clipFillRule],' +
        'canvas-path[clip],canvas-path[clipFillRule],' +
        'canvas-text[clip],canvas-text[clipFillRule]',
    providers: [asCanvasProperty(WaCanvasClip)],
})
export class WaCanvasClip implements CanvasMethod {
    @Input()
    public clip: Path2D | WaCanvasClipPath = new Path2D();

    @Input()
    public clipFillRule?: CanvasFillRule;

    public call(context: CanvasRenderingContext2D): void {
        if (this.clip instanceof WaCanvasClipPath) {
            context.beginPath();

            this.clip.pathSteps.forEach((step) => {
                step.call(context);
            });

            context.clip(this.clipFillRule);
        } else {
            context.clip(this.clip, this.clipFillRule);
        }
    }
}

/**
 * @deprecated: use {@link WaCanvasClip}
 */
export const ClipDirective = WaCanvasClip;
