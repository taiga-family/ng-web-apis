import {NgModule} from '@angular/core';
import {MidiPageComponent} from './midi-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {WebAudioModule} from '@ng-web-apis/audio';
import {FrequencyPipeModule} from '@ng-web-apis/midi';
import {DemoComponent} from './demo/demo.component';
import {AdsrPipe} from './adsr.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: MidiPageComponent}]),
        FormsModule,
        WebAudioModule,
        FrequencyPipeModule,
    ],
    declarations: [MidiPageComponent, DemoComponent, AdsrPipe],
})
export class MidiPageModule {}
