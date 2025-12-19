import {Directive, inject, type OnDestroy} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {WA_MEDIA_STREAM} from '../tokens/media-stream';

@Directive({
    selector: '[waMediaStreamAudioSourceNode]',
    providers: [asAudioNode(WaMediaStreamSource)],
    exportAs: 'AudioNode',
})
export class WaMediaStreamSource extends MediaStreamAudioSourceNode implements OnDestroy {
    constructor() {
        super(inject<AudioContext>(WA_AUDIO_CONTEXT), {
            mediaStream: inject(WA_MEDIA_STREAM),
        });
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
