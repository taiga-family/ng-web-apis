import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        `canvas-path[lineCap],canvas-path[lineDashOffset],canvas-path[lineJoin],canvas-path[lineWidth],canvas-path[lineDash],canvas-path[miterLimit],` +
        `canvas-text[lineCap],canvas-text[lineDashOffset],canvas-text[lineJoin],canvas-text[lineWidth],canvas-text[lineDash],canvas-text[miterLimit]`,
    providers: [asCanvasProperty(PathDrawingStylesDirective)],
})
export class PathDrawingStylesDirective
    implements CanvasMethod, Omit<CanvasPathDrawingStyles, 'getLineDash' | 'setLineDash'>
{
    @Input()
    lineCap: CanvasLineCap = `butt`;

    @Input()
    lineDashOffset = 0;

    @Input()
    lineJoin: CanvasLineJoin = `miter`;

    @Input()
    lineWidth = 1;

    @Input()
    lineDash: number[] = [];

    @Input()
    miterLimit = 10;

    call(context: CanvasRenderingContext2D): void {
        context.lineCap = this.lineCap;
        context.lineDashOffset = this.lineDashOffset;
        context.lineJoin = this.lineJoin;
        context.lineWidth = this.lineWidth;
        context.miterLimit = this.miterLimit;
        context.setLineDash(this.lineDash);
    }
}
