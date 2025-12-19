import {Directive, ElementRef, inject, type OnDestroy} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';

@Directive({
    selector:
        'audio[waMediaElementAudioSourceNode], video[waMediaElementAudioSourceNode]',
    providers: [asAudioNode(WaMediaSource)],
    exportAs: 'AudioNode',
})
export class WaMediaSource extends MediaElementAudioSourceNode implements OnDestroy {
    constructor() {
        super(inject<AudioContext>(WA_AUDIO_CONTEXT), {
            mediaElement: inject(ElementRef).nativeElement,
        });
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
