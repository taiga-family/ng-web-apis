import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `audio-page`,
    templateUrl: `./canvas-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasPageComponent {
    x1 = 20;
    y1 = 20;
    w1 = 100;
    h1 = 50;
    c1 = '#ff0000';

    x2 = 50;
    y2 = 50;
    w2 = 100;
    h2 = 50;
    c2 = '#00ff00';

    dX = 0;
    dY = 0;
    dWidth = 100;
    dHeight = 100;

    globalCompositeOperation = 'source-over';

    mouth = 30;
    blur = 0;
    offset = 0;

    font = 'bold 40px "Lucida Bright"';
    text = 'PAC-MAN';
    color = '#ffa500';

    readonly image = new Image();

    constructor() {
        this.image.onload = () => {
            URL.revokeObjectURL(this.image.src);
        };
    }

    onFile(input: HTMLInputElement) {
        if (input.files) {
            this.image.src = URL.createObjectURL(input.files[0]);
        }
    }
}
