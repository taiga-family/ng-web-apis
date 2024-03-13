import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CanvasModule} from '@ng-web-apis/canvas';
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
import {TuiInputColorComponent} from '@tinkoff/tui-editor';

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
        TuiInputColorComponent,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './canvas-page.component.html',
    styleUrls: ['./canvas-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CanvasPageComponent {
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

    protected readonly image = new Image();
    protected readonly items = ['source-over', 'multiply', 'screen'];

    constructor() {
        this.image.onload = () => {
            URL.revokeObjectURL(this.image.src);
        };
    }

    protected onFile(file: File): void {
        this.file = file;

        if (file) {
            this.image.src = URL.createObjectURL(file);
        }
    }
}
