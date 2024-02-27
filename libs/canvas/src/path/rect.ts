import {Directive, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {asCanvasMethod} from '../tokens/canvas-method';

@Directive({
    standalone: true,
    selector: 'canvas-rect',
    providers: [asCanvasMethod(RectDirective)],
})
export class RectDirective implements CanvasMethod {
    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public width = 0;

    @Input()
    public height = 0;

    public call(context: CanvasRenderingContext2D): void {
        context.rect(this.x, this.y, this.width, this.height);
    }
}
