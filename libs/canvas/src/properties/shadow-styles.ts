import {Directive, Input} from '@angular/core';

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
    @Input()
    public shadowBlur = 0;

    @Input()
    public shadowColor = 'transparent';

    @Input()
    public shadowOffsetX = 0;

    @Input()
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
