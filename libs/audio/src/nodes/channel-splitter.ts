import {
    Attribute,
    ContentChildren,
    Directive,
    Inject,
    OnDestroy,
    QueryList,
    SkipSelf,
} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: `[waChannelSplitterNode]`,
    inputs: [`channelCount`, `channelCountMode`, `channelInterpretation`],
    providers: [
        {
            provide: AUDIO_NODE,
            useValue: null,
        },
    ],
    exportAs: `AudioNode`,
})
export class WebAudioChannelSplitter extends ChannelSplitterNode implements OnDestroy {
    @ContentChildren(AUDIO_NODE, {descendants: false})
    set channels(channels: QueryList<AudioNode | null>) {
        this.disconnect();
        channels
            .filter(node => !!node)
            .forEach((node, index) => {
                this.connect(node!, index);
            });
    }

    constructor(
        @Attribute(`numberOfOutputs`) outputs: string | null,
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    ) {
        const numberOfOutputs = parseInt(outputs || ``, 10) || 6;

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

    ngOnDestroy(): void {
        this.disconnect();
    }
}
