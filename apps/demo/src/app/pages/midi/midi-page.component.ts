import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WebAudioModule} from '@ng-web-apis/audio';
import {MIDI_SUPPORT} from '@ng-web-apis/midi';
import {TuiButtonModule} from '@taiga-ui/core';

import {DemoComponent} from './demo/demo.component';

@Component({
    standalone: true,
    selector: 'midi-page',
    imports: [CommonModule, TuiButtonModule, FormsModule, WebAudioModule, DemoComponent],
    templateUrl: './midi-page.component.html',
    styleUrls: ['./midi-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MidiPageComponent {
    started = false;

    constructor(@Inject(MIDI_SUPPORT) readonly supported: boolean) {}

    start(): void {
        this.started = true;
    }
}
