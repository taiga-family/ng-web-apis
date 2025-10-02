import {Directive, Input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-text[direction],canvas-text[font],canvas-text[textAlign],canvas-text[textBaseline]',
    providers: [asCanvasProperty(WaCanvasTextDrawingStyles)],
})
export class WaCanvasTextDrawingStyles implements CanvasMethod, CanvasTextDrawingStyles {
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

    declare public fontStretch: CanvasFontStretch;
    declare public fontVariantCaps: CanvasFontVariantCaps;
    declare public letterSpacing: string;
    declare public textRendering: CanvasTextRendering;
    declare public wordSpacing: string;

    public call(context: CanvasRenderingContext2D): void {
        context.direction = this.direction;
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
    }
}

/**
 * @deprecated: use {@link WaCanvasTextDrawingStyles}
 */
export const TextDrawingStylesDirective = WaCanvasTextDrawingStyles;
