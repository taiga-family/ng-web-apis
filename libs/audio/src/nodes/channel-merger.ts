import {
    contentChildren,
    Directive,
    effect,
    HostAttributeToken,
    inject,
    input,
    type OnDestroy,
} from '@angular/core';

import {WaChannel} from '../directives/channel';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';

@Directive({
    selector: '[waChannelMergerNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WaChannelMerger)],
    exportAs: 'AudioNode',
})
export class WaChannelMerger extends ChannelMergerNode implements OnDestroy {
    private readonly channels = contentChildren(WaChannel, {descendants: false});

    public readonly inputs = input('', {alias: 'numberOfInputs'});

    constructor() {
        const attr = inject(new HostAttributeToken('numberOfInputs'), {optional: true});
        const numberOfInputs = parseInt(attr || '', 10) || 6;

        super(inject(WA_AUDIO_CONTEXT), {numberOfInputs});

        effect(() => {
            this.channels().forEach((node, index) => {
                node.connect(this, 0, index);
            });
        });
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
