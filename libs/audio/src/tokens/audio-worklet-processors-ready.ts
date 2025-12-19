import {inject, InjectionToken} from '@angular/core';

import {WA_AUDIO_CONTEXT} from './audio-context';
import {WA_AUDIO_WORKLET_PROCESSORS} from './audio-worklet-processors';

export const WA_AUDIO_WORKLET_PROCESSORS_READY = new InjectionToken<Promise<boolean>>(
    '[WA_AUDIO_WORKLET_PROCESSORS_READY]',
    {
        factory: async () => {
            const context = inject(WA_AUDIO_CONTEXT);
            const processors = inject(WA_AUDIO_WORKLET_PROCESSORS);

            return Promise.all(
                processors.map(async (processor) =>
                    context.audioWorklet.addModule(processor),
                ),
            ).then(() => true);
        },
    },
);
