import {Directive, inject, Input} from '@angular/core';

import {DrawService} from '../services/draw.service';

@Directive({
    standalone: true,
    selector: 'canvas-draw-image',
    providers: [DrawService],
})
export class DrawImageDirective {
    private readonly method = inject(DrawService);

    @Input()
    public image?: CanvasImageSource;

    @Input()
    public dX = 0;

    @Input()
    public dY = 0;

    @Input()
    public dWidth?: number;

    @Input()
    public dHeight?: number;

    @Input()
    public sX?: number;

    @Input()
    public sY?: number;

    @Input()
    public sWidth?: number;

    @Input()
    public sHeight?: number;

    constructor() {
        this.method.call = context => {
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
