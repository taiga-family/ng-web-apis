import MIDIInput = WebMidi.MIDIInput;
import MIDIOutput = WebMidi.MIDIOutput;

import {inject} from '@angular/core';
import {from, fromEvent, Observable, of} from 'rxjs';
import {map, shareReplay, startWith, switchMap} from 'rxjs/operators';
import {MIDI_ACCESS} from '../tokens/midi-access';

export function getPortsStream(ports: 'inputs'): Observable<MIDIInput[]>;
export function getPortsStream(ports: 'outputs'): Observable<MIDIOutput[]>;
export function getPortsStream(
    ports: 'inputs' | 'outputs',
): Observable<Array<MIDIOutput | MIDIInput>> {
    return from(inject(MIDI_ACCESS).catch(() => null)).pipe(
        switchMap(access =>
            access
                ? fromEvent(access, 'statechange').pipe(
                      map(() => [...access[ports].values()]),
                      startWith([...access[ports].values()]),
                  )
                : of([]),
        ),
        shareReplay(1),
    );
}
