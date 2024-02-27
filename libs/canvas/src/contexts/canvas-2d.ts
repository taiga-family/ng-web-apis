import {Attribute, Directive, ElementRef, inject} from '@angular/core';

import {DrawService} from '../services/draw.service';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Directive({
    standalone: true,
    selector: 'canvas[waCanvas2d]',
    providers: [
        {
            provide: CANVAS_2D_CONTEXT,
            deps: [
                ElementRef,
                // TODO: find any solution for that
                // [new Attribute('waOpaque')],
                // [new Attribute('waDesynchronized')],
            ],
            useFactory: (
                {nativeElement}: ElementRef<HTMLCanvasElement>,
                opaque: string | null = nativeElement.getAttribute('waOpaque'),
                desynchronized: string | null = nativeElement.getAttribute(
                    'waDesynchronized',
                ),
            ): CanvasRenderingContext2D => {
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
        DrawService,
    ],
})
export class Canvas2dDirective {
    private readonly context = inject(CANVAS_2D_CONTEXT);
    private readonly method = inject(DrawService);

    constructor(
        @Attribute('opaque') _opaque: string | null,
        @Attribute('desynchronized') _desynchronized: string | null,
    ) {
        this.context.strokeStyle = 'transparent';

        this.method.call = context => {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        };
    }
}
