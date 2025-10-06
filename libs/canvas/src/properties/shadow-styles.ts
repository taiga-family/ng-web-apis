import {Directive, effect, input} from '@angular/core';

import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-draw-image[shadowBlur],canvas-draw-image[shadowColor],canvas-draw-image[shadowOffsetX],canvas-draw-image[shadowOffsetY],' +
        'canvas-path[shadowBlur],canvas-path[shadowColor],canvas-path[shadowOffsetX],canvas-path[shadowOffsetY],' +
        'canvas-text[shadowBlur],canvas-text[shadowColor],canvas-text[shadowOffsetX],canvas-text[shadowOffsetY]',
    providers: [asCanvasProperty(WaCanvasShadowStyles)],
})
export class WaCanvasShadowStyles implements CanvasShadowStyles {
    protected readonly $ = effect(() => {
        this.shadowBlur = this.inputShadowBlur();
        this.shadowColor = this.inputShadowColor();
        this.shadowOffsetX = this.inputShadowOffsetX();
        this.shadowOffsetY = this.inputShadowOffsetY();
    });

    public readonly inputShadowBlur = input(0, {alias: 'shadowBlur'});
    public readonly inputShadowColor = input('transparent', {alias: 'shadowColor'});
    public readonly inputShadowOffsetX = input(0, {alias: 'shadowOffsetX'});
    public readonly inputShadowOffsetY = input(0, {alias: 'shadowOffsetY'});

    public shadowBlur = 0;
    public shadowColor = 'transparent';
    public shadowOffsetX = 0;
    public shadowOffsetY = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.shadowBlur = this.shadowBlur;
        context.shadowColor = this.shadowColor;
        context.shadowOffsetX = this.shadowOffsetX;
        context.shadowOffsetY = this.shadowOffsetY;
    }
}

/**
 * @deprecated: use {@link WaCanvasShadowStyles}
 */
export const ShadowStylesDirective = WaCanvasShadowStyles;
