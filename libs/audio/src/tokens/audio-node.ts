import {ExistingProvider, InjectionToken, Type} from '@angular/core';

export const AUDIO_NODE = new InjectionToken<AudioNode | null>(
    'Web Audio API audio node',
    {
        factory: () => null,
    },
);

export function asAudioNode(useExisting: Type<AudioNode>): ExistingProvider {
    return {
        provide: AUDIO_NODE,
        useExisting,
    };
}
