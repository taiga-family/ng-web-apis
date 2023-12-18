import {Directive, Inject, Input} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {DrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-text',
    providers: [DrawService],
})
export class TextDirective {
    @Input()
    text = '';

    @Input()
    x = 0;

    @Input()
    y = 0;

    @Input()
    maxWidth?: number;

    constructor(@Inject(DrawService) method: CanvasMethod) {
        method.call = context => {
            context.fillText(this.text, this.x, this.y, this.maxWidth);
            context.strokeText(this.text, this.x, this.y, this.maxWidth);
        };
    }
}
