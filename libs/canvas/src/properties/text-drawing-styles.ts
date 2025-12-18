import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-text[direction],canvas-text[font],canvas-text[textAlign],canvas-text[textBaseline]',
    inputs: ['direction', 'font', 'textAlign', 'fontKerning', 'textBaseline'],
    providers: [asCanvasProperty(WaCanvasTextDrawingStyles)],
})
export class WaCanvasTextDrawingStyles implements CanvasMethod, CanvasTextDrawingStyles {
    public direction: CanvasDirection = 'inherit';
    public font = '10px sans-serif';
    public textAlign: CanvasTextAlign = 'start';
    public fontKerning: CanvasFontKerning = 'auto';
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
