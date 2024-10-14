import type {OnDestroy} from '@angular/core';
import {Attribute, Directive, EventEmitter, inject, Output} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: '[waScriptProcessorNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioScriptProcessor)],
    exportAs: 'AudioNode',
})
export class WebAudioScriptProcessor extends ScriptProcessorNode implements OnDestroy {
    @Output()
    public audioprocess?: EventEmitter<AudioProcessingEvent>;

    constructor(
        @Attribute('bufferSize') bufferSize: string | null,
        @Attribute('numberOfInputChannels') numberOfInputChannels: string | null,
        @Attribute('numberOfOutputChannels') numberOfOutputChannels: string | null,
    ) {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});

        try {
            const result = context.createScriptProcessor(
                parseInt(bufferSize ?? '', 10) || 0,
                parseInt(numberOfInputChannels ?? '', 10) || 2,
                parseInt(numberOfOutputChannels ?? '', 10) || 2,
            ) as WebAudioScriptProcessor;

            Object.setPrototypeOf(result, WebAudioScriptProcessor.prototype);
            connect(node, result);

            const audioprocess = new EventEmitter<AudioProcessingEvent>();

            result.audioprocess = audioprocess;
            result.onaudioprocess = (e) => audioprocess.emit(e);

            return result;
        } catch {}

        super();
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
