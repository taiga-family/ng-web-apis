import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SpeechSynthesisModule} from '@ng-web-apis/speech';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLabelModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextAreaModule} from '@taiga-ui/kit';

import {SpeechPageComponent} from './speech-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLetModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiTextAreaModule,
        TuiButtonModule,
        TuiLabelModule,
        TuiTooltipModule,
        TuiSidebarModule,
        SpeechSynthesisModule,
        RouterModule.forChild([{path: ``, component: SpeechPageComponent}]),
    ],
    declarations: [SpeechPageComponent],
})
export class SpeechPageModule {}
