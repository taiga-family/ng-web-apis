import {inject, InjectionToken} from '@angular/core';
import {
    from,
    fromEvent,
    merge,
    type Observable,
    share,
    startWith,
    switchMap,
    throwError,
} from 'rxjs';

import {MIDI_ACCESS} from './midi-access';

export const WA_MIDI_MESSAGES = new InjectionToken<Observable<WebMidi.MIDIMessageEvent>>(
    '[WA_MIDI_MESSAGES]',
    {
        providedIn: 'root',
        factory: () =>
            from(inject(MIDI_ACCESS).catch((e: unknown) => e as Error)).pipe(
                switchMap((access: Error | MIDIAccess) =>
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
            ) as unknown as Observable<WebMidi.MIDIMessageEvent>,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_MESSAGES}
 */
export const MIDI_MESSAGES = WA_MIDI_MESSAGES;
