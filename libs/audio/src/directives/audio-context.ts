// eslint-disable-next-line no-restricted-imports
import {Attribute, Directive, forwardRef, type OnDestroy} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {latencyHintFactory} from '../utils/latency-hint-factory';

@Directive({
    standalone: true,
    selector: '[waAudioContext]',
    providers: [
        {
            provide: AUDIO_CONTEXT,
            useExisting: forwardRef(() => WebAudioContext),
        },
    ],
})
export class WebAudioContext extends AudioContext implements OnDestroy {
    constructor(
        @Attribute('latencyHint') latencyHint: AudioContextLatencyCategory | null,
        @Attribute('sampleRate') sampleRate: string | null,
    ) {
        super({
            latencyHint: latencyHintFactory(latencyHint),
            sampleRate: parseInt(sampleRate ?? '', 10) || undefined,
        });
    }

    public ngOnDestroy(): void {
        void this.close();
    }
}
