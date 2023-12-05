import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-text[direction],canvas-text[font],canvas-text[textAlign],canvas-text[textBaseline]',
    providers: [asCanvasProperty(TextDrawingStylesDirective)],
})
export class TextDrawingStylesDirective implements CanvasMethod, CanvasTextDrawingStyles {
    @Input()
    direction: CanvasDirection = 'inherit';

    @Input()
    font = '10px sans-serif';

    @Input()
    textAlign: CanvasTextAlign = 'start';

    @Input()
    fontKerning: CanvasFontKerning = 'auto';

    @Input()
    textBaseline: CanvasTextBaseline = 'alphabetic';

    call(context: CanvasRenderingContext2D) {
        context.direction = this.direction;
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
    }
}
