import {Attribute, Directive, ElementRef, Inject} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {DrawService} from '../services/draw.service';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Directive({
    selector: `canvas[waCanvas2d]`,
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
                opaque: string | null = nativeElement.getAttribute(`waOpaque`),
                desynchronized: string | null = nativeElement.getAttribute(
                    `waDesynchronized`,
                ),
            ): CanvasRenderingContext2D => {
                const context = nativeElement.getContext(`2d`, {
                    alpha: opaque === null,
                    desynchronized: desynchronized !== null,
                });

                if (!context) {
                    throw new Error(`Context of different type was already requested`);
                }

                return context;
            },
        },
        DrawService,
    ],
})
export class Canvas2dDirective {
    constructor(
        @Inject(CANVAS_2D_CONTEXT) context: CanvasRenderingContext2D,
        @Inject(DrawService) method: CanvasMethod,
        @Attribute(`opaque`) _opaque: string | null,
        @Attribute(`desynchronized`) _desynchronized: string | null,
    ) {
        context.strokeStyle = `transparent`;

        method.call = context => {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        };
    }
}
