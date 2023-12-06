import {inject} from '@angular/core';
import {from, fromEvent, Observable, of} from 'rxjs';
import {map, shareReplay, startWith, switchMap} from 'rxjs/operators';

import {MIDI_ACCESS} from '../tokens/midi-access';

export function getPortsStream(ports: 'inputs'): Observable<WebMidi.MIDIInput[]>;
export function getPortsStream(ports: 'outputs'): Observable<WebMidi.MIDIOutput[]>;
export function getPortsStream(
    ports: 'inputs' | 'outputs',
): Observable<Array<WebMidi.MIDIInput | WebMidi.MIDIOutput>> {
    return from(inject(MIDI_ACCESS).catch(() => null)).pipe(
        switchMap(access =>
            access
                ? fromEvent(access, `statechange`).pipe(
                      map(() => [...access[ports].values()]),
                      startWith([...access[ports].values()]),
                  )
                : of([]),
        ),
        // eslint-disable-next-line rxjs/no-sharereplay
        shareReplay(1),
    );
}
