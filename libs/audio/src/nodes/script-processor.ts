import {
    Attribute,
    Directive,
    EventEmitter,
    Inject,
    OnDestroy,
    Output,
    SkipSelf,
} from '@angular/core';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {connect} from '../utils/connect';

@Directive({
    selector: '[waScriptProcessorNode]',
    exportAs: 'AudioNode',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioScriptProcessor)],
})
export class WebAudioScriptProcessor extends ScriptProcessorNode implements OnDestroy {
    @Output()
    audioprocess?: EventEmitter<AudioProcessingEvent>;

    constructor(
        @Attribute('bufferSize') bufferSize: string | null,
        @Attribute('numberOfInputChannels') numberOfInputChannels: string | null,
        @Attribute('numberOfOutputChannels') numberOfOutputChannels: string | null,
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
    ) {
        try {
            const result = context.createScriptProcessor(
                parseInt(bufferSize || '', 10) || 0,
                parseInt(numberOfInputChannels || '', 10) || 2,
                parseInt(numberOfOutputChannels || '', 10) || 2,
            ) as WebAudioScriptProcessor;

            Object.setPrototypeOf(result, WebAudioScriptProcessor.prototype);
            connect(node, result);

            const audioprocess = new EventEmitter<AudioProcessingEvent>();

            result.audioprocess = audioprocess;
            result.onaudioprocess = e => audioprocess.emit(e);

            return result;
        } catch (_) {
            // noop
        }
        super();
    }

    ngOnDestroy() {
        this.disconnect();
    }
}
