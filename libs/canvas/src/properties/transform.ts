import {isPlatformBrowser} from '@angular/common';
import {Directive, inject, PLATFORM_ID} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas[transform],canvas-draw-image[transform],canvas-path[transform],canvas-text[transform]',
    inputs: ['transform'],
    providers: [asCanvasProperty(WaCanvasTransform)],
})
export class WaCanvasTransform implements CanvasMethod {
    private readonly parent = inject(WaCanvasTransform, {
        skipSelf: true,
        optional: true,
    });

    public transform: DOMMatrix | null = isPlatformBrowser(inject(PLATFORM_ID))
        ? new DOMMatrix()
        : null;

    public call(context: CanvasRenderingContext2D): void {
        if (this.transform) {
            context.setTransform(
                this.parent?.transform?.multiply(this.transform) || this.transform,
            );
        }
    }
}
