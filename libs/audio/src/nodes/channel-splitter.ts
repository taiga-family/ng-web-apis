import {
    contentChildren,
    Directive,
    effect,
    HostAttributeToken,
    inject,
    input,
} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {WA_AUDIO_NODE} from '../tokens/audio-node';

@Directive({
    selector: '[waChannelSplitterNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [{provide: WA_AUDIO_NODE, useValue: null}],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaChannelSplitter extends ChannelSplitterNode {
    private readonly channels = contentChildren(WA_AUDIO_NODE, {descendants: false});

    public readonly outputs = input('', {alias: 'numberOfOutputs'});

    constructor() {
        const attr = inject(new HostAttributeToken('numberOfOutputs'), {optional: true});
        const numberOfOutputs = parseInt(attr || '', 10) || 6;

        super(inject(WA_AUDIO_CONTEXT), {numberOfOutputs});

        effect(() => {
            this.disconnect();
            this.channels()
                .filter((node) => !!node)
                .forEach((node, index) => {
                    this.connect(node, index);
                });
        });
    }
}
