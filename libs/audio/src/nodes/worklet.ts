import {
    Attribute,
    Directive,
    EventEmitter,
    inject,
    OnDestroy,
    Output,
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
    public processorerror = new EventEmitter<void>();

    constructor(@Attribute('name') name: string) {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});

        super(context, name);

        connect(node, this);
    }

    public override readonly onprocessorerror = (): void => this.processorerror.emit();

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
