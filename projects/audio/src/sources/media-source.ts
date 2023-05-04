import {Directive, ElementRef, forwardRef, Inject, OnDestroy} from '@angular/core';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';

// @dynamic
@Directive({
    selector:
        'audio[waMediaElementAudioSourceNode], video[waMediaElementAudioSourceNode]',
    exportAs: 'AudioNode',
    providers: [
        {
            provide: AUDIO_NODE,
            useExisting: forwardRef(() => WebAudioMediaSource),
        },
    ],
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

    ngOnDestroy() {
        this.disconnect();
    }
}
