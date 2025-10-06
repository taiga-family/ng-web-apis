import {isPlatformBrowser} from '@angular/common';
import {Directive, inject, input, PLATFORM_ID} from '@angular/core';

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

    public readonly transform = input<DOMMatrix | null>(
        isPlatformBrowser(inject(PLATFORM_ID)) ? new DOMMatrix() : null,
    );

    public call(context: CanvasRenderingContext2D): void {
        const transform = this.transform();

        if (transform) {
            context.setTransform(
                this.parent?.transform()?.multiply(transform) || transform,
            );
        }
    }
}

/**
 * @deprecated: use {@link WaCanvasTransform}
 */
export const TransformDirective = WaCanvasTransform;
