import type {OnDestroy, QueryList} from '@angular/core';
import {Attribute, ContentChildren, Directive, inject} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: '[waChannelSplitterNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [
        {
            provide: AUDIO_NODE,
            useValue: null,
        },
    ],
    exportAs: 'AudioNode',
})
export class WebAudioChannelSplitter extends ChannelSplitterNode implements OnDestroy {
    constructor(@Attribute('numberOfOutputs') outputs: string | null) {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const modern = inject(CONSTRUCTOR_SUPPORT);
        const numberOfOutputs = parseInt(outputs ?? '', 10) || 6;

        if (modern) {
            super(context, {numberOfOutputs});
            connect(node, this);
        } else {
            const result = context.createChannelSplitter(numberOfOutputs);

            Object.setPrototypeOf(result, WebAudioChannelSplitter.prototype);
            connect(node, result);

            return result as WebAudioChannelSplitter;
        }
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }

    @ContentChildren(AUDIO_NODE, {descendants: false})
    protected set channels(channels: QueryList<AudioNode | null>) {
        this.disconnect();
        channels
            .filter((node) => !!node)
            .forEach((node, index) => {
                this.connect(node!, index);
            });
    }
}
