import {NgModule} from '@angular/core';
import {SpeechPageComponent} from './speech-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TuiLetModule} from '@taiga-ui/cdk';
import {SpeechSynthesisModule} from '@ng-web-apis/speech';
import {TuiSelectModule, TuiTextAreaModule} from '@taiga-ui/kit';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLabelModule,
    TuiTooltipModule,
} from '@taiga-ui/core';

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
        RouterModule.forChild([{path: '', component: SpeechPageComponent}]),
    ],
    declarations: [SpeechPageComponent],
})
export class SpeechPageModule {}
