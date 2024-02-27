import {Directive, inject, OnDestroy} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: '[waWaveShaperNode]',
    inputs: [
        'oversample',
        'curve',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WebAudioWaveShaper)],
    exportAs: 'AudioNode',
})
export class WebAudioWaveShaper extends WaveShaperNode implements OnDestroy {
    constructor() {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const modern = inject(CONSTRUCTOR_SUPPORT);

        if (modern) {
            super(context);
            connect(node, this);
        } else {
            const result = context.createWaveShaper() as WebAudioWaveShaper;

            Object.setPrototypeOf(result, WebAudioWaveShaper.prototype);
            connect(node, result);

            return result;
        }
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
