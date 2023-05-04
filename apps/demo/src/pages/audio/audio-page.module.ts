import {NgModule} from '@angular/core';
import {AudioPageComponent} from './audio-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {WebAudioModule} from '@ng-web-apis/audio';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WebAudioModule,
        RouterModule.forChild([{path: '', component: AudioPageComponent}]),
    ],
    declarations: [AudioPageComponent],
})
export class AudioPageModule {}
