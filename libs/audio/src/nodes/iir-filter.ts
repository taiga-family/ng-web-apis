import type {OnDestroy} from '@angular/core';
import {Directive, inject} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {FEEDBACK_COEFFICIENTS} from '../tokens/feedback-coefficients';
import {FEEDFORWARD_COEFFICIENTS} from '../tokens/feedforward-coefficients';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: '[waIIRFilterNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioIIRFilter)],
    exportAs: 'AudioNode',
})
export class WebAudioIIRFilter extends IIRFilterNode implements OnDestroy {
    constructor() {
        const feedback = inject(FEEDBACK_COEFFICIENTS);
        const feedforward = inject(FEEDFORWARD_COEFFICIENTS);
        const context = inject(AUDIO_CONTEXT);
        const modern = inject(CONSTRUCTOR_SUPPORT);
        const node = inject(AUDIO_NODE, {skipSelf: true});

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

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
