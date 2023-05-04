import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-text[direction],canvas-text[font],canvas-text[textAlign],canvas-text[textBaseline]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: TextDrawingStylesDirective,
            multi: true,
        },
    ],
})
export class TextDrawingStylesDirective implements CanvasMethod, CanvasTextDrawingStyles {
    @Input()
    direction: CanvasDirection = 'inherit';

    @Input()
    font = '10px sans-serif';

    @Input()
    textAlign: CanvasTextAlign = 'start';

    @Input()
    textBaseline: CanvasTextBaseline = 'alphabetic';

    call(context: CanvasRenderingContext2D) {
        context.direction = this.direction;
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
    }
}
