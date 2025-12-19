import {Directive, HostAttributeToken, inject, input, output} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';

// TODO: Add AudioWorkletNodeOptions
@Directive({
    selector: '[waAudioWorkletNode][name]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WaWorklet)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaWorklet extends AudioWorkletNode {
    public readonly name = input('');
    public readonly processorerror = output();

    constructor() {
        super(inject(WA_AUDIO_CONTEXT), inject(new HostAttributeToken('name')));
    }

    public override readonly onprocessorerror = (): void => this.processorerror.emit();
}
