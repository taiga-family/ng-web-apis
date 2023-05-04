import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    TrackByFunction,
} from '@angular/core';
import {MIDI_MESSAGES, notes, toData} from '@ng-web-apis/midi';
import {EMPTY, merge, Observable, Subject} from 'rxjs';
import {catchError, map, scan, startWith, switchMap, take} from 'rxjs/operators';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;
import {RESPONSE_BUFFER} from './response';
import {KeyValue} from '@angular/common';

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
    readonly octaves = Array.from({length: 24}, (_, i) => i + 48);

    readonly notes$: Observable<Map<number, number | null>>;

    private readonly mousedown$ = new Subject<number>();

    private readonly mouseup$ = new Subject<void>();

    private readonly silent$ = new Subject<number>();

    constructor(
        @Inject(RESPONSE_BUFFER) readonly response: Promise<AudioBuffer>,
        @Inject(MIDI_MESSAGES) messages$: Observable<MIDIMessageEvent>,
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

    noteKey: TrackByFunction<KeyValue<number, number | null>> = (
        _index: number,
        {key}: KeyValue<number, number | null>,
    ): number => key;

    getClass(notes: Map<number, number | null>, note: number): string {
        const className = !notes.get(note) ? '' : '_active';
        const key = note - 47;

        return `${className} key-${key % 12 || 12}`;
    }

    onQuiet(key?: number) {
        key && this.silent$.next(key);
    }

    onMouseDown(note: number) {
        this.mousedown$.next(note);
    }

    @HostListener('document:mouseup')
    @HostListener('document:touchend')
    onMouseUp() {
        this.mouseup$.next();
    }
}
