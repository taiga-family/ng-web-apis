import {Directive, inject} from '@angular/core';

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
    constructor() {
        const context = inject<AudioContext>(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE);
        const modern = inject(CONSTRUCTOR_SUPPORT);

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
