import {inject, InjectionToken} from '@angular/core';
import {from, fromEvent, merge, Observable, throwError} from 'rxjs';
import {share, startWith, switchMap} from 'rxjs/operators';
import {MIDI_ACCESS} from './midi-access';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

export const MIDI_MESSAGES = new InjectionToken<Observable<MIDIMessageEvent>>(
    'All incoming MIDI messages stream',
    {
        providedIn: 'root',
        factory: () =>
            from(inject(MIDI_ACCESS).catch((e: Error) => e)).pipe(
                switchMap(access =>
                    access instanceof Error
                        ? throwError(access)
                        : fromEvent(access as any, 'statechange').pipe(
                              startWith(null),
                              switchMap(() =>
                                  merge(
                                      ...Array.from(access.inputs).map(([_, input]) =>
                                          fromEvent(input, 'midimessage'),
                                      ),
                                  ),
                              ),
                          ),
                ),
                share(),
            ) as unknown as Observable<MIDIMessageEvent>,
    },
);
