import {Directive, forwardRef, Inject, OnDestroy} from '@angular/core';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {MEDIA_STREAM} from '../tokens/media-stream';

@Directive({
    selector: '[waMediaStreamAudioSourceNode]',
    exportAs: 'AudioNode',
    providers: [
        {
            provide: AUDIO_NODE,
            useExisting: forwardRef(() => WebAudioMediaStreamSource),
        },
    ],
})
export class WebAudioMediaStreamSource
    extends MediaStreamAudioSourceNode
    implements OnDestroy
{
    constructor(
        @Inject(MEDIA_STREAM) mediaStream: MediaStream,
        @Inject(AUDIO_CONTEXT) context: AudioContext,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    ) {
        if (modern) {
            super(context, {mediaStream});
        } else {
            const result = context.createMediaStreamSource(mediaStream);

            Object.setPrototypeOf(result, WebAudioMediaStreamSource.prototype);

            return result as WebAudioMediaStreamSource;
        }
    }

    ngOnDestroy() {
        this.disconnect();
    }
}
