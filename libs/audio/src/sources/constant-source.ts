import {
    Attribute,
    Directive,
    EventEmitter,
    inject,
    Input,
    OnDestroy,
    Output,
} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {AudioParamInput} from '../types/audio-param-input';
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
    offsetParam?: AudioParamInput;

    @Output()
    ended = new EventEmitter<void>();

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

    override readonly onended = (): void => this.ended.emit();

    ngOnDestroy(): void {
        try {
            this.stop();
        } catch {
            // noop
        }

        this.disconnect();
    }
}
