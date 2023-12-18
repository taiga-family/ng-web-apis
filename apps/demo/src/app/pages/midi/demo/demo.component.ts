import {CommonModule, KeyValue} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    TrackByFunction,
} from '@angular/core';
import {WebAudioModule} from '@ng-web-apis/audio';
import {FrequencyPipe, MIDI_MESSAGES, notes, toData} from '@ng-web-apis/midi';
import {
    catchError,
    EMPTY,
    map,
    merge,
    Observable,
    scan,
    startWith,
    Subject,
    switchMap,
    take,
} from 'rxjs';

import {AdsrPipe} from '../adsr.pipe';
import {RESPONSE_BUFFER} from './response';

@Component({
    standalone: true,
    selector: 'demo',
    imports: [WebAudioModule, CommonModule, FrequencyPipe, AdsrPipe],
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
    private readonly mousedown$ = new Subject<number>();
    private readonly mouseup$ = new Subject<void>();
    private readonly silent$ = new Subject<number>();

    readonly octaves = Array.from({length: 24}, (_, i) => i + 48);
    readonly notes$: Observable<Map<number, number | null>>;

    constructor(
        @Inject(RESPONSE_BUFFER) readonly response: Promise<AudioBuffer>,
        @Inject(MIDI_MESSAGES) messages$: Observable<WebMidi.MIDIMessageEvent>,
    ) {
        const mouseInitiated$ = this.mousedown$.pipe(
            switchMap(down =>
                this.mouseup$.pipe(
                    take(1),
                    map(() => [0, down, 0]),
                    startWith([0, down, 64]),
                ),
            ),
        );

        this.notes$ = merge(
            messages$.pipe(
                catchError(() => EMPTY),
                notes(),
                toData(),
            ),
            mouseInitiated$,
        ).pipe(
            scan((map, [_, note, volume]) => map.set(note, volume / 512), new Map()),
            switchMap(notes =>
                this.silent$.pipe(
                    map(key => notes.set(key, null)),
                    startWith(notes),
                ),
            ),
            startWith(new Map()),
        );
    }

    @HostListener('document:mouseup')
    @HostListener('document:touchend')
    onMouseUp(): void {
        this.mouseup$.next();
    }

    noteKey: TrackByFunction<KeyValue<number, number | null>> = (
        _index: number,
        {key}: KeyValue<number, number | null>,
    ): number => key;

    getClass(notes: Map<number, number | null>, note: number): string {
        const className = !notes.get(note) ? '' : '_active';
        const key = note - 47;

        return `${className} key-${key % 12 || 12}`;
    }

    onQuiet(key?: number): void {
        key && this.silent$.next(key);
    }

    onMouseDown(note: number): void {
        this.mousedown$.next(note);
    }
}
