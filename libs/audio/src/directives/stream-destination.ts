import {Directive, Inject} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: '[waMediaStreamAudioDestinationNode]',
    exportAs: 'AudioNode',
})
export class WebAudioMediaStreamDestination extends MediaStreamAudioDestinationNode {
    constructor(
        @Inject(AUDIO_CONTEXT) context: AudioContext,
        @Inject(AUDIO_NODE) node: AudioNode | null,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    ) {
        if (modern) {
            super(context);
            connect(node, this);
        } else {
            const result = context.createMediaStreamDestination();

            Object.setPrototypeOf(result, WebAudioMediaStreamDestination.prototype);
            connect(node, result);

            return result as WebAudioMediaStreamDestination;
        }
    }
}
