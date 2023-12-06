import {Attribute, Directive, EventEmitter, forwardRef, Output} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';

@Directive({
    selector: `[waOfflineAudioContext][length][sampleRate]`,
    providers: [
        {
            provide: AUDIO_CONTEXT,
            useExisting: forwardRef(() => WebAudioOfflineContext),
        },
    ],
})
export class WebAudioOfflineContext extends OfflineAudioContext {
    @Output()
    readonly complete = new EventEmitter<AudioBuffer>();

    constructor(
        @Attribute(`length`) length: string,
        @Attribute(`sampleRate`) sampleRate: string,
        @Attribute(`numberOfChannels`) numberOfChannels: string | null,
        @Attribute(`autoplay`) autoplay: string | null,
    ) {
        super(
            parseInt(numberOfChannels || ``, 10) || 1,
            parseInt(length, 10),
            parseInt(sampleRate, 10),
        );

        if (autoplay !== null) {
            void this.startRendering();
        }
    }

    override readonly oncomplete = ({
        renderedBuffer,
    }: OfflineAudioCompletionEvent): void => this.complete.emit(renderedBuffer);
}
