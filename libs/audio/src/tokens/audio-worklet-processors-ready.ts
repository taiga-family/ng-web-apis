import {inject, InjectionToken} from '@angular/core';

import {WA_AUDIO_CONTEXT} from './audio-context';
import {WA_AUDIO_WORKLET_PROCESSORS} from './audio-worklet-processors';
import {WA_AUDIO_WORKLET_SUPPORT} from './audio-worklet-support';

export const WA_AUDIO_WORKLET_PROCESSORS_READY = new InjectionToken<Promise<boolean>>(
    '[WA_AUDIO_WORKLET_PROCESSORS_READY]',
    {
        providedIn: 'root',
        factory: async () => {
            const context = inject(WA_AUDIO_CONTEXT);
            const processors = inject(WA_AUDIO_WORKLET_PROCESSORS);

            if (!inject(WA_AUDIO_WORKLET_SUPPORT)) {
                return Promise.reject('AudioWorklet is not supported').catch(() => false);
            }

            return Promise.all(
                processors.map(async (processor) =>
                    context.audioWorklet.addModule(processor),
                ),
            ).then(() => true);
        },
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_AUDIO_WORKLET_PROCESSORS_READY}
 */
export const AUDIO_WORKLET_PROCESSORS_READY = WA_AUDIO_WORKLET_PROCESSORS_READY;
