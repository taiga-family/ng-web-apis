import {Directive, Input} from '@angular/core';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-draw-image[shadowBlur],canvas-draw-image[shadowColor],canvas-draw-image[shadowOffsetX],canvas-draw-image[shadowOffsetY],' +
        'canvas-path[shadowBlur],canvas-path[shadowColor],canvas-path[shadowOffsetX],canvas-path[shadowOffsetY],' +
        'canvas-text[shadowBlur],canvas-text[shadowColor],canvas-text[shadowOffsetX],canvas-text[shadowOffsetY]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: ShadowStylesDirective,
            multi: true,
        },
    ],
})
export class ShadowStylesDirective implements CanvasShadowStyles {
    @Input()
    shadowBlur = 0;

    @Input()
    shadowColor = 'transparent';

    @Input()
    shadowOffsetX = 0;

    @Input()
    shadowOffsetY = 0;

    call(context: CanvasRenderingContext2D) {
        context.shadowBlur = this.shadowBlur;
        context.shadowColor = this.shadowColor;
        context.shadowOffsetX = this.shadowOffsetX;
        context.shadowOffsetY = this.shadowOffsetY;
    }
}
