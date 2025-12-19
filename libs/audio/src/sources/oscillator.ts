import {Directive, HostAttributeToken, inject} from '@angular/core';

import {WaSource} from '../directives/source';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waOscillatorNode]',
    inputs: [
        'detuneSetter: detune',
        'frequencySetter: frequency',
        'type',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
        'periodicWave',
    ],
    providers: [asAudioNode(WaOscillator)],
    exportAs: 'AudioNode',
    hostDirectives: [WaSource],
})
export class WaOscillator extends OscillatorNode {
    constructor() {
        const detune = inject(new HostAttributeToken('detune'), {optional: true});
        const frequency = inject(new HostAttributeToken('frequency'), {optional: true});

        super(inject(WA_AUDIO_CONTEXT), {
            detune: parse(detune, 0),
            frequency: parse(frequency, 440),
        });
    }

    public set periodicWave(periodicWave: PeriodicWave) {
        this.setPeriodicWave(periodicWave);
    }

    public set detuneSetter(value: AudioParamInput) {
        audioParam(this.detune, value, this.context.currentTime);
    }

    public set frequencySetter(value: AudioParamInput) {
        audioParam(this.frequency, value, this.context.currentTime);
    }
}
