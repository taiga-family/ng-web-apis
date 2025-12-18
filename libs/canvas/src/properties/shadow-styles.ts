import {Directive} from '@angular/core';

import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-draw-image[shadowBlur],canvas-draw-image[shadowColor],canvas-draw-image[shadowOffsetX],canvas-draw-image[shadowOffsetY],' +
        'canvas-path[shadowBlur],canvas-path[shadowColor],canvas-path[shadowOffsetX],canvas-path[shadowOffsetY],' +
        'canvas-text[shadowBlur],canvas-text[shadowColor],canvas-text[shadowOffsetX],canvas-text[shadowOffsetY]',
    inputs: ['shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY'],
    providers: [asCanvasProperty(WaCanvasShadowStyles)],
})
export class WaCanvasShadowStyles implements CanvasShadowStyles {
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
