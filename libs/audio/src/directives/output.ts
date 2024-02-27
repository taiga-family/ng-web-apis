import {Directive, inject, Input, OnDestroy} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: '[waOutput]',
})
export class WebAudioOutput extends GainNode implements OnDestroy {
    @Input()
    public set waOutput(destination: AudioNode | AudioParam | undefined) {
        this.disconnect();
        connect(this, destination);
    }

    constructor() {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE);
        const modern = inject(CONSTRUCTOR_SUPPORT);

        if (modern) {
            super(context);
            connect(node, this);
        } else {
            const result = context.createGain();

            Object.setPrototypeOf(result, WebAudioOutput.prototype);
            connect(node, result);

            return result as WebAudioOutput;
        }
    }

    protected static init(that: WebAudioOutput, node: AudioNode | null): void {
        connect(node, that);
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
