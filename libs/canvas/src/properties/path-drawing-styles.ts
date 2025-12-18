import {Directive} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    selector:
        'canvas-path[lineCap],canvas-path[lineDashOffset],canvas-path[lineJoin],canvas-path[lineWidth],canvas-path[lineDash],canvas-path[miterLimit],' +
        'canvas-text[lineCap],canvas-text[lineDashOffset],canvas-text[lineJoin],canvas-text[lineWidth],canvas-text[lineDash],canvas-text[miterLimit]',
    inputs: [
        'lineCap',
        'lineDashOffset',
        'lineJoin',
        'lineWidth',
        'lineDash',
        'miterLimit',
    ],
    providers: [asCanvasProperty(WaCanvasPathDrawingStyles)],
})
export class WaCanvasPathDrawingStyles
    implements CanvasMethod, Omit<CanvasPathDrawingStyles, 'getLineDash' | 'setLineDash'>
{
    public lineCap: CanvasLineCap = 'butt';
    public lineDashOffset = 0;
    public lineJoin: CanvasLineJoin = 'miter';
    public lineWidth = 1;
    public lineDash: number[] = [];
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
