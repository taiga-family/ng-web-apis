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

import {WA_MIDI_ACCESS} from './midi-access';

export const WA_MIDI_MESSAGES = new InjectionToken<Observable<WebMidi.MIDIMessageEvent>>(
    '[WA_MIDI_MESSAGES]',
    {
        factory: () =>
            from(inject(WA_MIDI_ACCESS).catch((e: unknown) => e as Error)).pipe(
                switchMap((access: Error | MIDIAccess) =>
                    access instanceof Error
                        ? throwError(access)
                        : fromEvent(access as any, 'statechange').pipe(
                              startWith(null),
                              switchMap(() => {
                                  const inputs: MIDIInput[] = [];

                                  access.inputs.forEach((input) => {
                                      inputs.push(input);
                                  });

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
