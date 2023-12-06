import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
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

import {CanvasPageComponent} from './canvas-page.component';

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
        RouterModule.forChild([{path: ``, component: CanvasPageComponent}]),
    ],
    declarations: [CanvasPageComponent],
})
export class CanvasPageModule {}
