import {type ExistingProvider, InjectionToken, type Type} from '@angular/core';

export const WA_AUDIO_NODE = new InjectionToken<AudioNode | null>('[WA_AUDIO_NODE]', {
    factory: () => null,
});

export function asAudioNode(useExisting: Type<AudioNode>): ExistingProvider {
    return {provide: WA_AUDIO_NODE, useExisting};
}
