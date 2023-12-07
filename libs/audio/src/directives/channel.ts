import {Directive, Inject, OnDestroy} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';

@Directive({
    standalone: true,
    selector: `[waChannel]`,
    exportAs: `AudioNode`,
})
export class WebAudioChannel extends GainNode implements OnDestroy {
    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    ) {
        if (modern) {
            super(context);
        } else {
            const result = context.createGain();

            Object.setPrototypeOf(result, WebAudioChannel.prototype);

            return result as WebAudioChannel;
        }
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}
