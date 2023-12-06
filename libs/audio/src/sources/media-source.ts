import {Directive, ElementRef, Inject, OnDestroy} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';

@Directive({
    selector: `audio[waMediaElementAudioSourceNode], video[waMediaElementAudioSourceNode]`,
    providers: [asAudioNode(WebAudioMediaSource)],
    exportAs: `AudioNode`,
})
export class WebAudioMediaSource
    extends MediaElementAudioSourceNode
    implements OnDestroy
{
    constructor(
        @Inject(AUDIO_CONTEXT) context: AudioContext,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLMediaElement>,
    ) {
        if (modern) {
            super(context, {mediaElement: nativeElement});
        } else {
            const result = context.createMediaElementSource(nativeElement);

            Object.setPrototypeOf(result, WebAudioMediaSource.prototype);

            return result as WebAudioMediaSource;
        }
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}
