import {isPlatformServer} from '@angular/common';
import {Directive, ElementRef, inject, PLATFORM_ID} from '@angular/core';

import {WaDrawService} from '../services/draw.service';
import {WA_CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

@Directive({
    selector: 'canvas[waCanvas2d]',
    inputs: ['waOpaque', 'waDesynchronized'],
    providers: [
        {
            provide: WA_CANVAS_2D_CONTEXT,
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
    private readonly context = inject(WA_CANVAS_2D_CONTEXT);
    private readonly method = inject(WaDrawService);

    public waOpaque = '' as const;
    public waDesynchronized = '' as const;

    constructor() {
        this.context.strokeStyle = 'transparent';

        this.method.call = (context) => {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        };
    }
}
