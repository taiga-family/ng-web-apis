import {Directive, inject, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas[transform],canvas-draw-image[transform],canvas-path[transform],canvas-text[transform]',
    providers: [asCanvasProperty(TransformDirective)],
})
export class TransformDirective implements CanvasMethod {
    private readonly parent = inject(TransformDirective, {
        skipSelf: true,
        optional: true,
    });

    @Input()
    transform: DOMMatrix = new DOMMatrix();

    call(context: CanvasRenderingContext2D): void {
        context.setTransform(
            this.parent?.transform.multiply(this.transform) || this.transform,
        );
    }
}
