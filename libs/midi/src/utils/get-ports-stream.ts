import {inject} from '@angular/core';
import type {Observable} from 'rxjs';
import {from, fromEvent, map, of, shareReplay, startWith, switchMap} from 'rxjs';

import {MIDI_ACCESS} from '../tokens/midi-access';

export function getPortsStream(ports: 'inputs'): Observable<MIDIInput[]>;
export function getPortsStream(ports: 'outputs'): Observable<MIDIOutput[]>;
export function getPortsStream(
    ports: 'inputs' | 'outputs',
): Observable<Array<MIDIInput | MIDIOutput>> {
    return from(inject(MIDI_ACCESS).catch(() => null)).pipe(
        switchMap(access => {
            const inputs: Array<MIDIInput | MIDIOutput> = [];

            access?.[ports].forEach(input => inputs.push(input));

            return access
                ? fromEvent(access, 'statechange').pipe(
                      map(() => inputs),
                      startWith(inputs),
                  )
                : of([]);
        }),
        // eslint-disable-next-line rxjs/no-sharereplay
        shareReplay(1),
    );
}
