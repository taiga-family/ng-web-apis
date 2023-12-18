import {
    Attribute,
    Directive,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    Output,
} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {parse} from '../utils/parse';

@Directive({
    standalone: true,
    selector: '[waOscillatorNode]',
    inputs: ['type', 'channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioOscillator)],
    exportAs: 'AudioNode',
})
export class WebAudioOscillator extends OscillatorNode implements OnDestroy {
    @Input()
    set periodicWave(periodicWave: PeriodicWave) {
        this.setPeriodicWave(periodicWave);
    }

    @Input('detune')
    @audioParam('detune')
    detuneParam?: AudioParamInput | string;

    @Input('frequency')
    @audioParam('frequency')
    frequencyParam?: AudioParamInput | string;

    @Output()
    ended?: EventEmitter<void>;

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
        @Attribute('autoplay') autoplay: string | null,
        @Attribute('detune') detuneArg: string | null,
        @Attribute('frequency') frequencyArg: string | null,
    ) {
        const detune = parse(detuneArg, 0);
        const frequency = parse(frequencyArg, 440);

        if (modern) {
            super(context, {detune, frequency});
            WebAudioOscillator.init(this, null, autoplay);
        } else {
            const result = context.createOscillator() as WebAudioOscillator;

            Object.setPrototypeOf(
                WebAudioOscillator.prototype,
                Object.getPrototypeOf(result),
            );
            Object.setPrototypeOf(result, WebAudioOscillator.prototype);

            result.detune.value = detune;
            result.frequency.value = frequency;
            WebAudioOscillator.init(result, null, autoplay);

            return result;
        }
    }

    static init(
        that: WebAudioOscillator,
        node: AudioNode | null,
        autoplay: string | null,
    ): void {
        connect(node, that);

        if (autoplay !== null) {
            that.start();
        }

        const ended = new EventEmitter<void>();

        that.ended = ended;
        that.onended = () => ended.emit();
    }

    ngOnDestroy(): void {
        try {
            this.stop();
        } catch {
            // noop
        }

        this.disconnect();
    }
}
