import {
    Directive,
    HostAttributeToken,
    inject,
    input,
    type OnDestroy,
} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {latencyHintFactory} from '../utils/latency-hint-factory';

@Directive({
    selector: '[waAudioContext]',
    providers: [{provide: WA_AUDIO_CONTEXT, useExisting: WaAudioContext}],
})
export class WaAudioContext extends AudioContext implements OnDestroy {
    public readonly rate = input('', {alias: 'sampleRate'});
    public readonly latencyHint = input<AudioContextLatencyCategory>();

    constructor() {
        const sampleRate = inject(new HostAttributeToken('sampleRate'), {optional: true});
        const latencyHint: any = inject(new HostAttributeToken('latencyHint'), {
            optional: true,
        });

        super({
            latencyHint: latencyHintFactory(latencyHint),
            sampleRate: parseInt(sampleRate ?? '', 10) || undefined,
        });
    }

    public ngOnDestroy(): void {
        void this.close();
    }
}
