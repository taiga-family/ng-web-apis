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
    selector: '[waAudioWorkletNode][name]',
    exportAs: 'AudioNode',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioWorklet)],
})
export class WebAudioWorklet extends AudioWorkletNode implements OnDestroy {
    @Output()
    processorerror = new EventEmitter<void>();

    override readonly onprocessorerror = () => this.processorerror.emit();

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
        @Attribute('name') name: string,
    ) {
        super(context, name);

        connect(node, this);
    }

    ngOnDestroy() {
        this.disconnect();
    }
}
