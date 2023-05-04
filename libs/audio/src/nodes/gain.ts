import {
    Attribute,
    Directive,
    forwardRef,
    Inject,
    Input,
    OnDestroy,
    SkipSelf,
} from '@angular/core';
import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {parse} from '../utils/parse';

// @dynamic
@Directive({
    selector: '[waGainNode]',
    exportAs: 'AudioNode',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [
        {
            provide: AUDIO_NODE,
            useExisting: forwardRef(() => WebAudioGain),
        },
    ],
})
export class WebAudioGain extends GainNode implements OnDestroy {
    @Input('gain')
    @audioParam('gain')
    gainParam?: AudioParamInput | string;

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
        @Attribute('gain') gainArg: AudioParamInput | string | null,
    ) {
        const gain = parse(gainArg, 1);

        if (modern) {
            super(context, {gain});
            connect(node, this);
        } else {
            const result = context.createGain() as WebAudioGain;

            Object.setPrototypeOf(result, WebAudioGain.prototype);
            connect(node, result);
            result.gain.value = gain;

            return result;
        }
    }

    ngOnDestroy() {
        this.disconnect();
    }
}
