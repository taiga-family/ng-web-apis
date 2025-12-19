import {Directive, HostAttributeToken, inject, input} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waDelayNode]',
    inputs: [
        'delayTimeSetter: delayTime',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaDelay)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaDelay extends DelayNode {
    public readonly maxDelayTime = input('');

    constructor() {
        const delayTime = inject(new HostAttributeToken('delayTime'), {optional: true});
        const maxDelayTime = inject(new HostAttributeToken('maxDelayTime'), {
            optional: true,
        });

        super(inject(WA_AUDIO_CONTEXT), {
            delayTime: parse(delayTime, 0),
            maxDelayTime: parse(maxDelayTime, 1),
        });
    }

    public set delayTimeSetter(value: AudioParamInput) {
        audioParam(this.delayTime, value, this.context.currentTime);
    }
}
