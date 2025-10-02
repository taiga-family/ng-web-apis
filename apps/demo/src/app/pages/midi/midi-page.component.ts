import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WaWebAudio} from '@ng-web-apis/audio';
import {MIDI_SUPPORT} from '@ng-web-apis/midi';
import {TuiButton} from '@taiga-ui/core';

import {Demo} from './demo/demo.component';

@Component({
    standalone: true,
    selector: 'midi-page',
    imports: [CommonModule, Demo, FormsModule, TuiButton, WaWebAudio],
    templateUrl: './midi-page.component.html',
    styleUrl: './midi-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MidiPage {
    protected readonly supported = inject(MIDI_SUPPORT);

    protected started = false;

    protected start(): void {
        this.started = true;
    }
}
