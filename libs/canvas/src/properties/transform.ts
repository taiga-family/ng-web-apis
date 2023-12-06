import {Directive, Inject, Input, Optional, SkipSelf} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector: `canvas[transform],canvas-draw-image[transform],canvas-path[transform],canvas-text[transform]`,
    providers: [asCanvasProperty(TransformDirective)],
})
export class TransformDirective implements CanvasMethod {
    @Input()
    transform: DOMMatrix = new DOMMatrix();

    constructor(
        @Optional()
        @SkipSelf()
        @Inject(TransformDirective)
        private readonly parent: TransformDirective | null,
    ) {}

    call(context: CanvasRenderingContext2D): void {
        context.setTransform(
            this.parent?.transform.multiply(this.transform) || this.transform,
        );
    }
}
