import {Directive, inject, input} from '@angular/core';

import {WaDrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-draw-image',
    providers: [WaDrawService],
})
export class WaCanvasDrawImage {
    private readonly method = inject(WaDrawService);

    public readonly image = input<CanvasImageSource>();
    public readonly dX = input(0);
    public readonly dY = input(0);
    public readonly dWidth = input<number>();
    public readonly dHeight = input<number>();
    public readonly sX = input<number>();
    public readonly sY = input<number>();
    public readonly sWidth = input<number>();
    public readonly sHeight = input<number>();

    constructor() {
        this.method.call = (context) => {
            const image = this.image();

            if (!image) {
                return;
            }

            const sX = this.sX();
            const sY = this.sY();
            const sWidth = this.sWidth();
            const sHeight = this.sHeight();
            const dX = this.dX();
            const dY = this.dY();
            const dWidth = this.dWidth();
            const dHeight = this.dHeight();

            if (
                sWidth !== undefined &&
                sHeight !== undefined &&
                sX !== undefined &&
                sY !== undefined &&
                dWidth !== undefined &&
                dHeight !== undefined
            ) {
                context.drawImage(
                    image,
                    sX,
                    sY,
                    sWidth,
                    sHeight,
                    dX,
                    dY,
                    dWidth,
                    dHeight,
                );
            } else if (dWidth !== undefined && dHeight !== undefined) {
                context.drawImage(image, dX, dY, dWidth, dHeight);
            } else {
                context.drawImage(image, dX, dY);
            }
        };
    }
}

/**
 * @deprecated: use {@link WaCanvasDrawImage}
 */
export const DrawImageDirective = WaCanvasDrawImage;
