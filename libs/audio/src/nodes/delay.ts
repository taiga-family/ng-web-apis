import {Attribute, Directive, inject, Input, OnDestroy} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {parse} from '../utils/parse';

@Directive({
    standalone: true,
    selector: '[waDelayNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioDelay)],
    exportAs: 'AudioNode',
})
export class WebAudioDelay extends DelayNode implements OnDestroy {
    @Input('delayTime')
    @audioParam('delayTime')
    public delayTimeParam?: AudioParamInput;

    constructor(
        @Attribute('delayTime') delayTimeArg: string | null,
        @Attribute('maxDelayTime') maxDelayTimeArg: string | null,
    ) {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const modern = inject(CONSTRUCTOR_SUPPORT);
        const delayTime = parse(delayTimeArg, 0);
        const maxDelayTime = parse(maxDelayTimeArg, 1);

        if (modern) {
            super(context, {delayTime, maxDelayTime});
            connect(node, this);
        } else {
            const result = context.createDelay(maxDelayTime) as WebAudioDelay;

            Object.setPrototypeOf(result, WebAudioDelay.prototype);
            connect(node, result);
            result.delayTime.value = delayTime;

            return result;
        }
    }

    protected static init(that: WebAudioDelay, node: AudioNode | null): void {
        connect(node, that);
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
