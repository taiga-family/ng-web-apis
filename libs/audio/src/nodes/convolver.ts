import {Directive, inject} from '@angular/core';

import {WaNode} from '../directives/node';
import {WaAudioBufferService} from '../services/audio-buffer.service';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';

@Directive({
    selector: '[waConvolverNode]',
    inputs: [
        'bufferSetter: buffer',
        'normalize',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaConvolver)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaConvolver extends ConvolverNode {
    private readonly service = inject(WaAudioBufferService);

    constructor() {
        super(inject(WA_AUDIO_CONTEXT));
    }

    public set bufferSetter(source: AudioBuffer | string | null) {
        if (typeof source === 'string') {
            this.service.fetch(source).then((result) => {
                this.buffer = result;
            });
        } else {
            this.buffer = source;
        }
    }
}
