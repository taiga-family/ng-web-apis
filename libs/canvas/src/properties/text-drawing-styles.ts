import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-text[direction],canvas-text[font],canvas-text[textAlign],canvas-text[textBaseline]',
    providers: [asCanvasProperty(TextDrawingStylesDirective)],
})
export class TextDrawingStylesDirective implements CanvasMethod, CanvasTextDrawingStyles {
    @Input()
    public direction: CanvasDirection = 'inherit';

    @Input()
    public font = '10px sans-serif';

    @Input()
    public textAlign: CanvasTextAlign = 'start';

    @Input()
    public fontKerning: CanvasFontKerning = 'auto';

    @Input()
    public textBaseline: CanvasTextBaseline = 'alphabetic';

    public call(context: CanvasRenderingContext2D): void {
        context.direction = this.direction;
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
    }
}
