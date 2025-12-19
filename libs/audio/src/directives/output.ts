import {Directive, inject, type OnDestroy} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {WA_AUDIO_NODE} from '../tokens/audio-node';
import {connect} from '../utils/connect';

@Directive({
    selector: '[waOutput]',
    inputs: ['waOutput'],
})
export class WaOutput extends GainNode implements OnDestroy {
    constructor() {
        super(inject(WA_AUDIO_CONTEXT));

        connect(inject(WA_AUDIO_NODE), this);
    }

    public set waOutput(destination: AudioNode | AudioParam | undefined) {
        this.disconnect();
        connect(this, destination);
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
