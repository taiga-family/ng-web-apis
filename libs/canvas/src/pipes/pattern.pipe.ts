import {inject, Pipe, type PipeTransform} from '@angular/core';

import {WA_CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Pipe({name: 'pattern'})
export class WaCanvasPatternPipe implements PipeTransform {
    private readonly context = inject(WA_CANVAS_2D_CONTEXT);

    public transform(image: CanvasImageSource, repetition = 'repeat'): CanvasPattern {
        return this.context.createPattern(image, repetition)!;
    }
}
