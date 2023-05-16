import {NgModule} from '@angular/core';
import {MidiPageComponent} from './midi-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {WebAudioModule} from '@ng-web-apis/audio';
import {FrequencyPipeModule} from '@ng-web-apis/midi';
import {TuiButtonModule} from '@taiga-ui/core';
import {DemoComponent} from './demo/demo.component';
import {AdsrPipe} from './adsr.pipe';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        FormsModule,
        WebAudioModule,
        FrequencyPipeModule,
        RouterModule.forChild([{path: '', component: MidiPageComponent}]),
    ],
    declarations: [MidiPageComponent, DemoComponent, AdsrPipe],
})
export class MidiPageModule {}
