import {inject, InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {from, fromEvent, merge, share, startWith, switchMap, throwError} from 'rxjs';

import {MIDI_ACCESS} from './midi-access';

export const WA_MIDI_MESSAGES = new InjectionToken<Observable<MIDIMessageEvent>>(
    '[WA_MIDI_MESSAGES]',
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

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_MESSAGES}
 */
export const MIDI_MESSAGES = WA_MIDI_MESSAGES;
