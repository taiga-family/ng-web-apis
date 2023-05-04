import {inject, InjectionToken} from '@angular/core';
import {AUDIO_CONTEXT} from './audio-context';
import {AUDIO_WORKLET_PROCESSORS} from './audio-worklet-processors';
import {AUDIO_WORKLET_SUPPORT} from './audio-worklet-support';

export const AUDIO_WORKLET_PROCESSORS_READY = new InjectionToken<Promise<boolean>>(
    'Web Audio API worklet processors resolution promise',
    {
        providedIn: 'root',
        factory: () => {
            const context = inject(AUDIO_CONTEXT);
            const processors = inject(AUDIO_WORKLET_PROCESSORS);

            if (!inject(AUDIO_WORKLET_SUPPORT)) {
                return Promise.reject('AudioWorklet is not supported').catch(() => false);
            }

            return Promise.all(
                processors.map(processor => context.audioWorklet.addModule(processor)),
            ).then(() => true);
        },
    },
);
