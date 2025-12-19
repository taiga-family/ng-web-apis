import {
    booleanAttribute,
    Directive,
    HostAttributeToken,
    inject,
    input,
    type OnInit,
    output,
} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';

@Directive({
    selector: '[waOfflineAudioContext][length][sampleRate]',
    providers: [{provide: WA_AUDIO_CONTEXT, useExisting: WaOfflineContext}],
})
export class WaOfflineContext extends OfflineAudioContext implements OnInit {
    public readonly lngth = input('', {alias: 'length'});
    public readonly rate = input('', {alias: 'sampleRate'});
    public readonly channels = input('', {alias: 'numberOfChannels'});
    public readonly autoplay = input(false, {transform: booleanAttribute});
    public readonly complete = output<AudioBuffer>();

    constructor() {
        const length = inject(new HostAttributeToken('length'));
        const sampleRate = inject(new HostAttributeToken('sampleRate'));
        const channels = inject(new HostAttributeToken('numberOfChannels'), {
            optional: true,
        });

        super(
            parseInt(channels ?? '', 10) || 1,
            parseInt(length, 10),
            parseInt(sampleRate, 10),
        );
    }

    public override readonly oncomplete = (e: OfflineAudioCompletionEvent): void =>
        this.complete.emit(e.renderedBuffer);

    public ngOnInit(): void {
        if (this.autoplay()) {
            this.startRendering();
        }
    }
}
