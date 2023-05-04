import {
    Attribute,
    Directive,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    OnDestroy,
    Output,
} from '@angular/core';
import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {parse} from '../utils/parse';

// @dynamic
@Directive({
    selector: '[waOscillatorNode]',
    exportAs: 'AudioNode',
    inputs: ['type', 'channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [
        {
            provide: AUDIO_NODE,
            useExisting: forwardRef(() => WebAudioOscillator),
        },
    ],
})
export class WebAudioOscillator extends OscillatorNode implements OnDestroy {
    @Input()
    set periodicWave(periodicWave: PeriodicWave) {
        this.setPeriodicWave(periodicWave);
    }

    @Input('detune')
    @audioParam('detune')
    detuneParam?: AudioParamInput;

    @Input('frequency')
    @audioParam('frequency')
    frequencyParam?: AudioParamInput;

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

    ngOnDestroy() {
        try {
            this.stop();
        } catch {
            // noop
        }

        this.disconnect();
    }

    static init(
        that: WebAudioOscillator,
        node: AudioNode | null,
        autoplay: string | null,
    ) {
        connect(node, that);

        if (autoplay !== null) {
            that.start();
        }

        const ended = new EventEmitter<void>();

        that.ended = ended;
        that.onended = () => ended.emit();
    }
}
