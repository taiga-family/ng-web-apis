import {Directive, ElementRef, inject, type OnDestroy} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';

@Directive({
    standalone: true,
    selector:
        'audio[waMediaElementAudioSourceNode], video[waMediaElementAudioSourceNode]',
    providers: [asAudioNode(WebAudioMediaSource)],
    exportAs: 'AudioNode',
})
export class WebAudioMediaSource
    extends MediaElementAudioSourceNode
    implements OnDestroy
{
    constructor() {
        const context = inject<AudioContext>(AUDIO_CONTEXT);
        const modern = inject(CONSTRUCTOR_SUPPORT);
        const nativeElement: HTMLMediaElement = inject(ElementRef).nativeElement;

        if (modern) {
            super(context, {mediaElement: nativeElement});
        } else {
            const result = context.createMediaElementSource(nativeElement);

            Object.setPrototypeOf(result, WebAudioMediaSource.prototype);

            return result as WebAudioMediaSource;
        }
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
