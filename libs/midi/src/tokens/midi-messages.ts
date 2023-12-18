import {inject, InjectionToken} from '@angular/core';
import {
    from,
    fromEvent,
    merge,
    Observable,
    share,
    startWith,
    switchMap,
    throwError,
} from 'rxjs';

import {MIDI_ACCESS} from './midi-access';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

export const MIDI_MESSAGES = new InjectionToken<Observable<MIDIMessageEvent>>(
    '[MIDI_MESSAGES]: All incoming MIDI messages stream',
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
