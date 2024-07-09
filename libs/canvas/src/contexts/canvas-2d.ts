import {Directive, ElementRef, inject, Input} from '@angular/core';

import {WaDrawService} from '../services/draw.service';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Directive({
    standalone: true,
    selector: 'canvas[waCanvas2d]',
    providers: [
        {
            provide: CANVAS_2D_CONTEXT,
            useFactory: (): CanvasRenderingContext2D => {
                const {nativeElement} = inject(ElementRef);
                const opaque = nativeElement.getAttribute('waOpaque');
                const desynchronized = nativeElement.getAttribute('waDesynchronized');
                const context = nativeElement.getContext('2d', {
                    alpha: opaque === null,
                    desynchronized: desynchronized !== null,
                });

                if (!context) {
                    throw new Error('Context of different type was already requested');
                }

                return context;
            },
        },
        WaDrawService,
    ],
})
export class WaCanvas2d {
    private readonly context = inject(CANVAS_2D_CONTEXT);
    private readonly method = inject(WaDrawService);

    @Input()
    public waOpaque = '';

    @Input()
    public waDesynchronized = '';

    constructor() {
        this.context.strokeStyle = 'transparent';

        this.method.call = (context) => {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        };
    }
}

/**
 * @deprecated: use {@link WaCanvas2d}
 */
export const Canvas2dDirective = WaCanvas2d;
