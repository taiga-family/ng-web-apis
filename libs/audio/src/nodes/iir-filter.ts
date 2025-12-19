import {Directive, inject} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {WA_FEEDBACK_COEFFICIENTS} from '../tokens/feedback-coefficients';
import {WA_FEEDFORWARD_COEFFICIENTS} from '../tokens/feedforward-coefficients';

@Directive({
    selector: '[waIIRFilterNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WaIIRFilter)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaIIRFilter extends IIRFilterNode {
    constructor() {
        const feedback = inject(WA_FEEDBACK_COEFFICIENTS);
        const feedforward = inject(WA_FEEDFORWARD_COEFFICIENTS);

        super(inject(WA_AUDIO_CONTEXT), {feedback, feedforward});
    }
}
