import {inject, InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {from, fromEvent, merge, share, startWith, switchMap, throwError} from 'rxjs';

import {MIDI_ACCESS} from './midi-access';

export const MIDI_MESSAGES = new InjectionToken<Observable<MIDIMessageEvent>>(
    '[MIDI_MESSAGES]: All incoming MIDI messages stream',
    {
        providedIn: 'root',
        factory: () =>
            from(inject(MIDI_ACCESS).catch((e: Error) => e)).pipe(
                switchMap((access) =>
                    access instanceof Error
                        ? throwError(access)
                        : fromEvent(access as any, 'statechange').pipe(
                              startWith(null),
                              switchMap(() => {
                                  const inputs: MIDIInput[] = [];

                                  access.inputs.forEach((input) => inputs.push(input));

                                  return merge(
                                      ...inputs.map((input) =>
                                          fromEvent(input, 'midimessage'),
                                      ),
                                  );
                              }),
                          ),
                ),
                share(),
            ) as unknown as Observable<MIDIMessageEvent>,
    },
);
