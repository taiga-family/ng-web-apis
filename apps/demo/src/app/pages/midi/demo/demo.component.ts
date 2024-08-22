import type {KeyValue} from '@angular/common';
import {CommonModule} from '@angular/common';
import type {TrackByFunction} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WaWebAudio} from '@ng-web-apis/audio';
import {FrequencyPipe, MIDI_MESSAGES, notes, toData} from '@ng-web-apis/midi';
import type {Observable} from 'rxjs';
import {
    catchError,
    EMPTY,
    map,
    merge,
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
    imports: [AdsrPipe, CommonModule, FrequencyPipe, WaWebAudio],
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:mouseup)': 'onMouseUp()',
        '(document:touchend)': 'onMouseUp()',
    },
})
export class Demo {
    private readonly mousedown$ = new Subject<number>();
    private readonly mouseup$ = new Subject<void>();
    private readonly silent$ = new Subject<number>();

    protected readonly octaves = Array.from({length: 24}, (_, i) => i + 48);
    protected readonly notes$: Observable<Map<number, number | null>>;
    protected readonly response = inject(RESPONSE_BUFFER);

    constructor() {
        const mouseInitiated$ = this.mousedown$.pipe(
            switchMap((down) =>
                this.mouseup$.pipe(
                    take(1),
                    map(() => [0, down, 0]),
                    startWith([0, down, 64]),
                ),
            ),
        );

        this.notes$ = merge(
            inject(MIDI_MESSAGES).pipe(
                catchError(() => EMPTY),
                notes(),
                toData(),
            ),
            mouseInitiated$,
        ).pipe(
            scan(
                (map, [_, note, volume]) => map.set(note, (volume ?? 0) / 512),
                new Map(),
            ),
            switchMap((notes) =>
                this.silent$.pipe(
                    map((key) => notes.set(key, null)),
                    startWith(notes),
                ),
            ),
            startWith(new Map()),
        );
    }

    protected onMouseUp(): void {
        this.mouseup$.next();
    }

    protected noteKey: TrackByFunction<KeyValue<number, number | null>> = (
        _index: number,
        {key}: KeyValue<number, number | null>,
    ): number => key;

    protected getClass(notes: Map<number, number | null>, note: number): string {
        const className = !notes.get(note) ? '' : '_active';
        const key = note - 47;

        return `${className} key-${key % 12 || 12}`;
    }

    protected onQuiet(key?: number): void {
        if (key) {
            this.silent$.next(key);
        }
    }

    protected onMouseDown(note: number): void {
        this.mousedown$.next(note);
    }
}
