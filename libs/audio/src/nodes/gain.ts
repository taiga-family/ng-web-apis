import {Directive, HostAttributeToken, inject} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waGainNode]',
    inputs: [
        'gainSetter: gain',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaGain)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaGain extends GainNode {
    constructor() {
        const gain = inject(new HostAttributeToken('gain'), {optional: true});

        super(inject(WA_AUDIO_CONTEXT), {gain: parse(gain, 1)});
    }

    public set gainSetter(value: AudioParamInput) {
        audioParam(this.gain, value, this.context.currentTime);
    }
}
