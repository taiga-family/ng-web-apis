import {Inject, Pipe, PipeTransform} from '@angular/core';

import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Pipe({
    standalone: true,
    name: 'pattern',
})
export class PatternPipe implements PipeTransform {
    constructor(
        @Inject(CANVAS_2D_CONTEXT) private readonly context: CanvasRenderingContext2D,
    ) {}

    transform(image: CanvasImageSource, repetition = 'repeat'): CanvasPattern {
        return this.context.createPattern(image, repetition)!;
    }
}
