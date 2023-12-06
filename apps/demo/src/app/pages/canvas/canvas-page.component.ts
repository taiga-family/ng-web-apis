import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CanvasModule} from '@ng-web-apis/canvas';
import {TuiInputColorModule} from '@taiga-ui/addon-editor';
import {
    TuiExpandModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputFilesModule,
    TuiInputModule,
    TuiSelectModule,
    TuiSliderModule,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'audio-page',
    imports: [
        CommonModule,
        FormsModule,
        CanvasModule,
        TuiInputFilesModule,
        TuiLabelModule,
        TuiSliderModule,
        TuiExpandModule,
        TuiSelectModule,
        TuiInputModule,
        TuiInputColorModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './canvas-page.component.html',
    styleUrls: ['./canvas-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CanvasPageComponent {
    x1 = 20;
    y1 = 20;
    w1 = 100;
    h1 = 50;

    x2 = 50;
    y2 = 50;
    w2 = 100;
    h2 = 50;
    c2 = '#00ff00';

    dX = 0;
    dY = 0;
    dWidth = 100;
    dHeight = 100;

    globalCompositeOperation: GlobalCompositeOperation = 'source-over';

    mouth = 30;
    blur = 0;
    offset = 0;

    font = 'bold 40px "Lucida Bright"';
    text = 'PAC-MAN';
    color = '#ffa500';

    file: File | null = null;

    readonly image = new Image();
    readonly items = ['source-over', 'multiply', 'screen'];

    constructor() {
        this.image.onload = () => {
            URL.revokeObjectURL(this.image.src);
        };
    }

    onFile(file: File): void {
        this.file = file;

        if (file) {
            this.image.src = URL.createObjectURL(file);
        }
    }
}
