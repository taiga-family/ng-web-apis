import {Directive, forwardRef, Inject, OnDestroy, SkipSelf} from '@angular/core';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {FEEDBACK_COEFFICIENTS} from '../tokens/feedback-coefficients';
import {FEEDFORWARD_COEFFICIENTS} from '../tokens/feedforward-coefficients';
import {connect} from '../utils/connect';

@Directive({
    selector: '[waIIRFilterNode]',
    exportAs: 'AudioNode',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [
        {
            provide: AUDIO_NODE,
            useExisting: forwardRef(() => WebAudioIIRFilter),
        },
    ],
})
export class WebAudioIIRFilter extends IIRFilterNode implements OnDestroy {
    constructor(
        @Inject(FEEDBACK_COEFFICIENTS) feedback: number[],
        @Inject(FEEDFORWARD_COEFFICIENTS) feedforward: number[],
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
    ) {
        if (modern) {
            super(context, {feedback, feedforward});
            connect(node, this);
        } else {
            const result = context.createIIRFilter(
                feedback,
                feedforward,
            ) as WebAudioIIRFilter;

            Object.setPrototypeOf(result, WebAudioIIRFilter.prototype);
            connect(node, result);

            return result;
        }
    }

    ngOnDestroy() {
        this.disconnect();
    }
}
