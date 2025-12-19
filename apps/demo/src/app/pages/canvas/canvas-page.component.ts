import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WaCanvas} from '@ng-web-apis/canvas';
import {TuiExpand, TuiLabel, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFiles,
    TuiInputColor,
    TuiSelect,
    TuiSlider,
} from '@taiga-ui/kit';

@Component({
    selector: 'canvas-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiExpand,
        TuiFiles,
        TuiInputColor,
        TuiLabel,
        TuiSelect,
        TuiSlider,
        TuiTextfield,
        WaCanvas,
    ],
    templateUrl: './canvas-page.component.html',
    styleUrl: './canvas-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CanvasPage {
    protected x1 = 20;
    protected y1 = 20;
    protected w1 = 100;
    protected h1 = 50;

    protected x2 = 50;
    protected y2 = 50;
    protected w2 = 100;
    protected h2 = 50;
    protected c2 = '#00ff00';

    protected dX = 0;
    protected dY = 0;
    protected dWidth = 100;
    protected dHeight = 100;

    protected globalCompositeOperation: GlobalCompositeOperation = 'source-over';

    protected mouth = 30;
    protected blur = 0;
    protected offset = 0;

    protected font = 'bold 40px "Lucida Bright"';
    protected text = 'PAC-MAN';
    protected color = '#ffa500';

    protected file: File | null = null;

    protected readonly image = isPlatformBrowser(inject(PLATFORM_ID))
        ? new Image()
        : null;

    protected readonly items = ['source-over', 'multiply', 'screen'];

    constructor() {
        if (this.image) {
            const img = this.image;

            img.onload = () => {
                URL.revokeObjectURL(img.src);
            };
        }
    }

    protected onFile(file: File | null): void {
        this.file = file;

        if (file && this.image) {
            this.image.src = URL.createObjectURL(file);
        }
    }
}
