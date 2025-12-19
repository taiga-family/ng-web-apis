import {Directive, HostAttributeToken, inject} from '@angular/core';

import {WaSource} from '../directives/source';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waConstantSourceNode]',
    inputs: [
        'offsetSetter: offset',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaConstantSource)],
    exportAs: 'AudioNode',
    hostDirectives: [WaSource],
})
export class WaConstantSource extends ConstantSourceNode {
    constructor() {
        super(inject(WA_AUDIO_CONTEXT), {
            offset: parse(inject(new HostAttributeToken('offset'), {optional: true}), 0),
        });
    }

    public set offsetSetter(value: AudioParamInput) {
        audioParam(this.offset, value, this.context.currentTime);
    }
}
