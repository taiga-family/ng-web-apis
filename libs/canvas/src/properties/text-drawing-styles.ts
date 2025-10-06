import {Directive, effect, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-text[direction],canvas-text[font],canvas-text[textAlign],canvas-text[textBaseline]',
    providers: [asCanvasProperty(WaCanvasTextDrawingStyles)],
})
export class WaCanvasTextDrawingStyles implements CanvasMethod, CanvasTextDrawingStyles {
    protected readonly $ = effect(() => {
        this.direction = this.inputDirection();
        this.font = this.inputFont();
        this.textAlign = this.inputTextAlign();
        this.fontKerning = this.inputFontKerning();
        this.textBaseline = this.inputTextBaseline();
    });

    public readonly inputDirection = input<CanvasDirection>('inherit', {
        alias: 'direction',
    });

    public readonly inputFont = input<string>('10px sans-serif', {alias: 'font'});

    public readonly inputTextAlign = input<CanvasTextAlign>('start', {
        alias: 'textAlign',
    });

    public readonly inputFontKerning = input<CanvasFontKerning>('auto', {
        alias: 'fontKerning',
    });

    public readonly inputTextBaseline = input<CanvasTextBaseline>('alphabetic', {
        alias: 'textBaseline',
    });

    public direction: CanvasDirection = this.inputDirection();
    public font = this.inputFont();
    public textAlign: CanvasTextAlign = this.inputTextAlign();
    public fontKerning: CanvasFontKerning = this.inputFontKerning();
    public textBaseline: CanvasTextBaseline = this.inputTextBaseline();

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
