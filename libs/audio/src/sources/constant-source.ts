import type {OnDestroy} from '@angular/core';
import {Attribute, Directive, EventEmitter, inject, Input, Output} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import type {AudioParamInput} from '../types/audio-param-input';
import {parse} from '../utils/parse';

@Directive({
    standalone: true,
    selector: '[waConstantSourceNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioConstantSource)],
    exportAs: 'AudioNode',
})
export class WebAudioConstantSource extends ConstantSourceNode implements OnDestroy {
    @Input('offset')
    @audioParam('offset')
    public offsetParam?: AudioParamInput;

    @Output()
    public ended = new EventEmitter<void>();

    constructor(
        @Attribute('autoplay') autoplay: string | null,
        @Attribute('offset') offset: string | null,
    ) {
        const context = inject(AUDIO_CONTEXT);

        super(context, {
            offset: parse(offset, 0),
        });

        if (autoplay !== null) {
            this.start();
        }
    }

    public override readonly onended = (): void => this.ended.emit();

    public ngOnDestroy(): void {
        try {
            this.stop();
        } catch {
            // noop
        }

        this.disconnect();
    }
}
