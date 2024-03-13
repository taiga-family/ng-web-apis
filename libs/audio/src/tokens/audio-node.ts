import type {ExistingProvider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const AUDIO_NODE = new InjectionToken<AudioNode | null>(
    '[AUDIO_NODE]: Web Audio API audio node',
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
