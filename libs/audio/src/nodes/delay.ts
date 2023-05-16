import {Attribute, Directive, Inject, Input, OnDestroy, SkipSelf} from '@angular/core';
import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {parse} from '../utils/parse';

@Directive({
    selector: '[waDelayNode]',
    exportAs: 'AudioNode',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioDelay)],
})
export class WebAudioDelay extends DelayNode implements OnDestroy {
    @Input('delayTime')
    @audioParam('delayTime')
    delayTimeParam?: AudioParamInput;

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
        @Attribute('delayTime') delayTimeArg: string | null,
        @Attribute('maxDelayTime') maxDelayTimeArg: string | null,
    ) {
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

    ngOnDestroy() {
        this.disconnect();
    }

    static init(that: WebAudioDelay, node: AudioNode | null) {
        connect(node, that);
    }
}
