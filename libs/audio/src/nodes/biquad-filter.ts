import {Directive, HostAttributeToken, inject} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waBiquadFilterNode]',
    inputs: [
        'detuneSetter: detune',
        'frequencySetter: frequency',
        'gainSetter: gain',
        'qSetter: Q',
        'type',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaBiquadFilter)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaBiquadFilter extends BiquadFilterNode {
    constructor() {
        const detune = inject(new HostAttributeToken('detune'), {optional: true});
        const frequency = inject(new HostAttributeToken('frequency'), {optional: true});
        const gain = inject(new HostAttributeToken('gain'), {optional: true});
        const Q = inject(new HostAttributeToken('Q'), {optional: true});

        super(inject(WA_AUDIO_CONTEXT), {
            detune: parse(detune, 0),
            frequency: parse(frequency, 350),
            gain: parse(gain, 0),
            Q: parse(Q, 1),
        });
    }

    public set detuneSetter(value: AudioParamInput) {
        audioParam(this.detune, value, this.context.currentTime);
    }

    public set frequencySetter(value: AudioParamInput) {
        audioParam(this.frequency, value, this.context.currentTime);
    }

    public set gainSetter(value: AudioParamInput) {
        audioParam(this.gain, value, this.context.currentTime);
    }

    public set qSetter(value: AudioParamInput) {
        audioParam(this.Q, value, this.context.currentTime);
    }
}
