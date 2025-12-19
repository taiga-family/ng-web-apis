import {Directive, HostAttributeToken, inject} from '@angular/core';

import {WaSource} from '../directives/source';
import {WaAudioBufferService} from '../services/audio-buffer.service';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waAudioBufferSourceNode]',
    inputs: [
        'bufferSetter: buffer',
        'detuneSetter: detune',
        'playbackRateSetter: playbackRate',
        'loop',
        'loopStart',
        'loopEnd',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WaBufferSource)],
    exportAs: 'AudioNode',
    hostDirectives: [WaSource],
})
export class WaBufferSource extends AudioBufferSourceNode {
    private readonly service = inject(WaAudioBufferService);

    constructor() {
        const detune = inject(new HostAttributeToken('detune'), {optional: true});
        const playbackRate = inject(new HostAttributeToken('playbackRate'), {
            optional: true,
        });

        super(inject(WA_AUDIO_CONTEXT), {
            detune: parse(detune, 0),
            playbackRate: parse(playbackRate, 1),
        });
    }

    public set detuneSetter(value: AudioParamInput) {
        audioParam(this.detune, value, this.context.currentTime);
    }

    public set playbackRateSetter(value: AudioParamInput) {
        audioParam(this.playbackRate, value, this.context.currentTime);
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
