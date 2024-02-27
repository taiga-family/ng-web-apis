import {Directive, inject, OnDestroy} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';

@Directive({
    standalone: true,
    selector: '[waChannel]',
    exportAs: 'AudioNode',
})
export class WebAudioChannel extends GainNode implements OnDestroy {
    constructor() {
        const context = inject(AUDIO_CONTEXT);
        const modern = inject(CONSTRUCTOR_SUPPORT);

        if (modern) {
            super(context);
        } else {
            const result = context.createGain();

            Object.setPrototypeOf(result, WebAudioChannel.prototype);

            return result as WebAudioChannel;
        }
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
