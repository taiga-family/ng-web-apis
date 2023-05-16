import {NgModule} from '@angular/core';
import {AudioPageComponent} from './audio-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {WebAudioModule} from '@ng-web-apis/audio';
import {FormsModule} from '@angular/forms';
import {
    TuiDataListWrapperModule,
    TuiRadioLabeledModule,
    TuiSelectModule,
    TuiSliderModule,
} from '@taiga-ui/kit';
import {CanvasModule} from '@ng-web-apis/canvas';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WebAudioModule,
        RouterModule.forChild([{path: '', component: AudioPageComponent}]),
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
