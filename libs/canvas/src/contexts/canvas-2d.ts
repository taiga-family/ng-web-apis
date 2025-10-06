import {isPlatformServer} from '@angular/common';
import {Directive, ElementRef, inject, input, PLATFORM_ID} from '@angular/core';

import {WaDrawService} from '../services/draw.service';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Directive({
    standalone: true,
    selector: 'canvas[waCanvas2d]',
    providers: [
        {
            provide: CANVAS_2D_CONTEXT,
            useFactory: (): CanvasRenderingContext2D => {
                if (isPlatformServer(inject(PLATFORM_ID))) {
                    return {} as unknown as CanvasRenderingContext2D;
                }

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

    public readonly waOpaque = input<''>('' as const);
    public readonly waDesynchronized = input<''>('' as const);

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
