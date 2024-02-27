import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-path[lineCap],canvas-path[lineDashOffset],canvas-path[lineJoin],canvas-path[lineWidth],canvas-path[lineDash],canvas-path[miterLimit],' +
        'canvas-text[lineCap],canvas-text[lineDashOffset],canvas-text[lineJoin],canvas-text[lineWidth],canvas-text[lineDash],canvas-text[miterLimit]',
    providers: [asCanvasProperty(PathDrawingStylesDirective)],
})
export class PathDrawingStylesDirective
    implements CanvasMethod, Omit<CanvasPathDrawingStyles, 'getLineDash' | 'setLineDash'>
{
    @Input()
    public lineCap: CanvasLineCap = 'butt';

    @Input()
    public lineDashOffset = 0;

    @Input()
    public lineJoin: CanvasLineJoin = 'miter';

    @Input()
    public lineWidth = 1;

    @Input()
    public lineDash: number[] = [];

    @Input()
    public miterLimit = 10;

    public call(context: CanvasRenderingContext2D): void {
        context.lineCap = this.lineCap;
        context.lineDashOffset = this.lineDashOffset;
        context.lineJoin = this.lineJoin;
        context.lineWidth = this.lineWidth;
        context.miterLimit = this.miterLimit;
        context.setLineDash(this.lineDash);
    }
}
