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
    standalone: true,
    selector: '[waAudioWorkletNode][name]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioWorklet)],
    exportAs: 'AudioNode',
})
export class WebAudioWorklet extends AudioWorkletNode implements OnDestroy {
    @Output()
    processorerror = new EventEmitter<void>();

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
        @Attribute('name') name: string,
    ) {
        super(context, name);

        connect(node, this);
    }

    override readonly onprocessorerror = (): void => this.processorerror.emit();

    ngOnDestroy(): void {
        this.disconnect();
    }
}
