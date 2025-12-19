import {Directive, inject} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';

@Directive({
    selector: '[waWaveShaperNode]',
    inputs: [
        'oversample',
        'curve',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaWaveShaper)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaWaveShaper extends WaveShaperNode {
    constructor() {
        super(inject(WA_AUDIO_CONTEXT));
    }
}
