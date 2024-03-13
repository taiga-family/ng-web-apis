import type {OnDestroy} from '@angular/core';
import {Directive, inject} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {MEDIA_STREAM} from '../tokens/media-stream';

@Directive({
    standalone: true,
    selector: '[waMediaStreamAudioSourceNode]',
    providers: [asAudioNode(WebAudioMediaStreamSource)],
    exportAs: 'AudioNode',
})
export class WebAudioMediaStreamSource
    extends MediaStreamAudioSourceNode
    implements OnDestroy
{
    constructor() {
        const mediaStream = inject(MEDIA_STREAM);
        const context = inject<AudioContext>(AUDIO_CONTEXT);
        const modern = inject(CONSTRUCTOR_SUPPORT);

        if (modern) {
            super(context, {mediaStream});
        } else {
            const result = context.createMediaStreamSource(mediaStream);

            Object.setPrototypeOf(result, WebAudioMediaStreamSource.prototype);

            return result as WebAudioMediaStreamSource;
        }
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
