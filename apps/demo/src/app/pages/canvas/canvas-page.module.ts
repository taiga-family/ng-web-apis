import {NgModule} from '@angular/core';
import {CanvasPageComponent} from './canvas-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
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
import {TuiInputColorModule} from '@taiga-ui/addon-editor';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CanvasModule,
        TuiInputFilesModule,
        TuiLabelModule,
        TuiSliderModule,
        TuiExpandModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
        TuiInputColorModule,
        TuiInputModule,
        RouterModule.forChild([{path: '', component: CanvasPageComponent}]),
    ],
    declarations: [CanvasPageComponent],
})
export class CanvasPageModule {}
