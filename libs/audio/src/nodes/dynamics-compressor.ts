import {Directive, HostAttributeToken, inject} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waDynamicsCompressorNode]',
    inputs: [
        'attackSetter: attack',
        'kneeSetter: knee',
        'ratioSetter: ratio',
        'releaseSetter: release',
        'thresholdSetter: threshold',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaDynamicsCompressor)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaDynamicsCompressor extends DynamicsCompressorNode {
    constructor() {
        const attack = inject(new HostAttributeToken('attack'), {optional: true});
        const knee = inject(new HostAttributeToken('knee'), {optional: true});
        const ratio = inject(new HostAttributeToken('ratio'), {optional: true});
        const release = inject(new HostAttributeToken('release'), {optional: true});
        const threshold = inject(new HostAttributeToken('threshold'), {optional: true});

        super(inject(WA_AUDIO_CONTEXT), {
            attack: parse(attack, 0.003),
            knee: parse(knee, 30),
            ratio: parse(ratio, 12),
            release: parse(release, 0.25),
            threshold: parse(threshold, -24),
        });
    }

    public set attackSetter(value: AudioParamInput) {
        audioParam(this.attack, value, this.context.currentTime);
    }

    public set kneeSetter(value: AudioParamInput) {
        audioParam(this.knee, value, this.context.currentTime);
    }

    public set ratioSetter(value: AudioParamInput) {
        audioParam(this.ratio, value, this.context.currentTime);
    }

    public set releaseSetter(value: AudioParamInput) {
        audioParam(this.release, value, this.context.currentTime);
    }

    public set thresholdSetter(value: AudioParamInput) {
        audioParam(this.threshold, value, this.context.currentTime);
    }
}
