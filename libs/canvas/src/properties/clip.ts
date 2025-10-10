import {Directive, input} from '@angular/core';

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
    public readonly clip = input<Path2D | WaCanvasClipPath>(new Path2D());
    public readonly clipFillRule = input<CanvasFillRule>();

    public call(context: CanvasRenderingContext2D): void {
        const clip = this.clip();

        if (clip instanceof WaCanvasClipPath) {
            context.beginPath();

            clip.pathSteps().forEach((step) => step.call(context));

            context.clip(this.clipFillRule());
        } else {
            context.clip(clip, this.clipFillRule());
        }
    }
}

/**
 * @deprecated: use {@link WaCanvasClip}
 */
export const ClipDirective = WaCanvasClip;
