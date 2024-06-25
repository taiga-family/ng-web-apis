import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';

import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Pipe({
    standalone: true,
    name: 'pattern',
})
export class WaCanvasPatternPipe implements PipeTransform {
    private readonly context = inject(CANVAS_2D_CONTEXT);

    public transform(image: CanvasImageSource, repetition = 'repeat'): CanvasPattern {
        return this.context.createPattern(image, repetition)!;
    }
}

/**
 * @deprecated: use {@link WaCanvasPatternPipe}
 */
export const PatternPipe = WaCanvasPatternPipe;
