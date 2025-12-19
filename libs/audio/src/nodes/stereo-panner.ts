import {Directive, HostAttributeToken, inject} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waStereoPannerNode]',
    inputs: [
        'panSetter: pan',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaStereoPanner)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaStereoPanner extends StereoPannerNode {
    constructor() {
        const pan = inject(new HostAttributeToken('pan'), {optional: true});

        super(inject(WA_AUDIO_CONTEXT), {pan: parse(pan, 0)});
    }

    public set panSetter(value: AudioParamInput) {
        audioParam(this.pan, value, this.context.currentTime);
    }
}
