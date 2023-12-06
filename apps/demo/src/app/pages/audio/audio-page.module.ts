import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {WebAudioModule} from '@ng-web-apis/audio';
import {CanvasModule} from '@ng-web-apis/canvas';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiRadioLabeledModule,
    TuiSelectModule,
    TuiSliderModule,
} from '@taiga-ui/kit';

import {AudioPageComponent} from './audio-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WebAudioModule,
        RouterModule.forChild([{path: ``, component: AudioPageComponent}]),
        TuiRadioLabeledModule,
        CanvasModule,
        TuiButtonModule,
        TuiSliderModule,
        TuiLabelModule,
        TuiSelectModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperModule,
    ],
    declarations: [AudioPageComponent],
})
export class AudioPageModule {}
