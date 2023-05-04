import {Directive, forwardRef, Inject, OnDestroy} from '@angular/core';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {MEDIA_STREAM_TRACK} from '../tokens/media-stream-track';

// @dynamic
@Directive({
    selector: '[waMediaStreamTrackAudioSourceNode]',
    exportAs: 'AudioNode',
    providers: [
        {
            provide: AUDIO_NODE,
            useExisting: forwardRef(() => WebAudioMediaStreamTrackSource),
        },
    ],
})
export class WebAudioMediaStreamTrackSource
    extends MediaStreamTrackAudioSourceNode
    implements OnDestroy
{
    constructor(
        @Inject(MEDIA_STREAM_TRACK) mediaStreamTrack: MediaStreamTrack,
        @Inject(AUDIO_CONTEXT) context: AudioContext,
    ) {
        super(context, {mediaStreamTrack});
    }

    ngOnDestroy() {
        this.disconnect();
    }
}
