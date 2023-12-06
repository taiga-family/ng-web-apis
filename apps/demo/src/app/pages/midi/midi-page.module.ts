import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {WebAudioModule} from '@ng-web-apis/audio';
import {FrequencyPipeModule} from '@ng-web-apis/midi';
import {TuiButtonModule} from '@taiga-ui/core';

import {AdsrPipe} from './adsr.pipe';
import {DemoComponent} from './demo/demo.component';
import {MidiPageComponent} from './midi-page.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        FormsModule,
        WebAudioModule,
        FrequencyPipeModule,
        RouterModule.forChild([{path: ``, component: MidiPageComponent}]),
    ],
    declarations: [MidiPageComponent, DemoComponent, AdsrPipe],
})
export class MidiPageModule {}
