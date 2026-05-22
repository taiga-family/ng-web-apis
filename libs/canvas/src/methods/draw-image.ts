import {Directive, inject} from '@angular/core';

import {WaDrawService} from '../services/draw.service';

@Directive({
    selector: 'canvas-draw-image',
    inputs: ['image', 'dX', 'dY', 'dWidth', 'dHeight', 'sX', 'sY', 'sWidth', 'sHeight'],
    providers: [WaDrawService],
})
export class WaCanvasDrawImage {
    private readonly method = inject(WaDrawService);

    public image?: CanvasImageSource;
    public dX = 0;
    public dY = 0;
    public dWidth?: number;
    public dHeight?: number;
    public sX?: number;
    public sY?: number;
    public sWidth?: number;
    public sHeight?: number;

    constructor() {
        this.method.call = (context) => {
            if (!this.image) {
                return;
            }

            if (
                this.sWidth !== undefined &&
                this.sHeight !== undefined &&
                this.sX !== undefined &&
                this.sY !== undefined &&
                this.dWidth !== undefined &&
                this.dHeight !== undefined
            ) {
                context.drawImage(
                    this.image,
                    this.sX,
                    this.sY,
                    this.sWidth,
                    this.sHeight,
                    this.dX,
                    this.dY,
                    this.dWidth,
                    this.dHeight,
                );
            } else if (this.dWidth !== undefined && this.dHeight !== undefined) {
                context.drawImage(
                    this.image,
                    this.dX,
                    this.dY,
                    this.dWidth,
                    this.dHeight,
                );
            } else {
                context.drawImage(this.image, this.dX, this.dY);
            }
        };
    }
}
