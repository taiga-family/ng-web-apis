import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MIDI_SUPPORT} from '@ng-web-apis/midi';

@Component({
    selector: 'midi-page',
    templateUrl: './midi-page.component.html',
    styleUrls: ['./midi-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MidiPageComponent {
    started = false;

    constructor(@Inject(MIDI_SUPPORT) readonly supported: boolean) {}

    start(): void {
        this.started = true;
    }
}
