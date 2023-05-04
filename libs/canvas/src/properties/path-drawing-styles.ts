import {Directive, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

// TODO: Replace Pick with Omit
@Directive({
    selector:
        'canvas-path[lineCap],canvas-path[lineDashOffset],canvas-path[lineJoin],canvas-path[lineWidth],canvas-path[lineDash],canvas-path[miterLimit],' +
        'canvas-text[lineCap],canvas-text[lineDashOffset],canvas-text[lineJoin],canvas-text[lineWidth],canvas-text[lineDash],canvas-text[miterLimit]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: PathDrawingStylesDirective,
            multi: true,
        },
    ],
})
export class PathDrawingStylesDirective
    implements
        CanvasMethod,
        Pick<
            CanvasPathDrawingStyles,
            Exclude<keyof CanvasPathDrawingStyles, 'getLineDash' | 'setLineDash'>
        >
{
    @Input()
    lineCap: CanvasLineCap = 'butt';

    @Input()
    lineDashOffset = 0;

    @Input()
    lineJoin: CanvasLineJoin = 'miter';

    @Input()
    lineWidth = 1;

    @Input()
    lineDash: number[] = [];

    @Input()
    miterLimit = 10;

    call(context: CanvasRenderingContext2D) {
        context.lineCap = this.lineCap;
        context.lineDashOffset = this.lineDashOffset;
        context.lineJoin = this.lineJoin;
        context.lineWidth = this.lineWidth;
        context.miterLimit = this.miterLimit;
        context.setLineDash(this.lineDash);
    }
}
