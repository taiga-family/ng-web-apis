import {Directive, inject, Input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas[transform],canvas-draw-image[transform],canvas-path[transform],canvas-text[transform]',
    providers: [asCanvasProperty(WaCanvasTransform)],
})
export class WaCanvasTransform implements CanvasMethod {
    private readonly parent = inject(WaCanvasTransform, {
        skipSelf: true,
        optional: true,
    });

    @Input()
    public transform: DOMMatrix = new DOMMatrix();

    public call(context: CanvasRenderingContext2D): void {
        context.setTransform(
            this.parent?.transform.multiply(this.transform) || this.transform,
        );
    }
}

/**
 * @deprecated: use {@link WaCanvasTransform}
 */
export const TransformDirective = WaCanvasTransform;
