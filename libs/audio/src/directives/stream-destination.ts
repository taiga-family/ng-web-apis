import {Directive, inject} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {WA_AUDIO_NODE} from '../tokens/audio-node';
import {connect} from '../utils/connect';

@Directive({
    selector: '[waMediaStreamAudioDestinationNode]',
    exportAs: 'AudioNode',
})
export class WaMediaStreamDestination extends MediaStreamAudioDestinationNode {
    constructor() {
        super(inject<AudioContext>(WA_AUDIO_CONTEXT));

        connect(inject(WA_AUDIO_NODE), this);
    }
}
