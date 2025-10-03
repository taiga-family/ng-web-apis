import {
    // eslint-disable-next-line no-restricted-imports
    Attribute,
    ContentChildren,
    Directive,
    inject,
    type OnDestroy,
    type QueryList,
} from '@angular/core';

import {WebAudioChannel} from '../directives/channel';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';

@Directive({
    standalone: true,
    selector: '[waChannelMergerNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioChannelMerger)],
    exportAs: 'AudioNode',
})
export class WebAudioChannelMerger extends ChannelMergerNode implements OnDestroy {
    constructor(@Attribute('numberOfInputs') inputs: string | null) {
        const context = inject(AUDIO_CONTEXT);
        const modern = inject(CONSTRUCTOR_SUPPORT);
        const numberOfInputs = parseInt(inputs ?? '', 10) || 6;

        if (modern) {
            super(context, {numberOfInputs});
        } else {
            const result = context.createChannelMerger(numberOfInputs);

            Object.setPrototypeOf(result, WebAudioChannelMerger.prototype);

            return result as WebAudioChannelMerger;
        }
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }

    @ContentChildren(WebAudioChannel, {descendants: false})
    protected set channels(channels: QueryList<AudioNode>) {
        channels.forEach((node, index) => {
            node.connect(this, 0, index);
        });
    }
}
