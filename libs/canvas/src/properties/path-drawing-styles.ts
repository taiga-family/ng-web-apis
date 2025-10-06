import {Directive, effect, input} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasProperty} from '../tokens/canvas-properties';

@Directive({
    standalone: true,
    selector:
        'canvas-path[lineCap],canvas-path[lineDashOffset],canvas-path[lineJoin],canvas-path[lineWidth],canvas-path[lineDash],canvas-path[miterLimit],' +
        'canvas-text[lineCap],canvas-text[lineDashOffset],canvas-text[lineJoin],canvas-text[lineWidth],canvas-text[lineDash],canvas-text[miterLimit]',
    providers: [asCanvasProperty(WaCanvasPathDrawingStyles)],
})
export class WaCanvasPathDrawingStyles
    implements CanvasMethod, Omit<CanvasPathDrawingStyles, 'getLineDash' | 'setLineDash'>
{
    protected readonly $ = effect(() => {
        this.lineCap = this.inputLineCap();
        this.lineDashOffset = this.inputLineDashOffset();
        this.lineJoin = this.inputLineJoin();
        this.lineWidth = this.inputLineWidth();
        this.lineDash = this.inputLineDash();
        this.miterLimit = this.inputMiterLimit();
    });

    public readonly inputLineCap = input<CanvasLineCap>('butt', {alias: 'lineCap'});
    public readonly inputLineDashOffset = input(0, {alias: 'lineDashOffset'});
    public readonly inputLineJoin = input<CanvasLineJoin>('miter', {alias: 'lineJoin'});
    public readonly inputLineWidth = input(1, {alias: 'lineWidth'});
    public readonly inputLineDash = input<number[]>([], {alias: 'lineDash'});
    public readonly inputMiterLimit = input(10, {alias: 'miterLimit'});

    public lineCap = this.inputLineCap();
    public lineDashOffset = this.inputLineDashOffset();
    public lineJoin: CanvasLineJoin = this.inputLineJoin();
    public lineWidth = this.inputLineWidth();
    public lineDash = this.inputLineDash();
    public miterLimit = this.inputMiterLimit();

    public call(context: CanvasRenderingContext2D): void {
        context.lineCap = this.lineCap;
        context.lineDashOffset = this.lineDashOffset;
        context.lineJoin = this.lineJoin;
        context.lineWidth = this.lineWidth;
        context.miterLimit = this.miterLimit;
        context.setLineDash(this.lineDash);
    }
}

/**
 * @deprecated: use {@link WaCanvasPathDrawingStyles}
 */
export const PathDrawingStylesDirective = WaCanvasPathDrawingStyles;
