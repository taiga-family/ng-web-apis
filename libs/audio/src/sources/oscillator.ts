import type {OnDestroy} from '@angular/core';
import {Attribute, Directive, EventEmitter, inject, Input, Output} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import type {AudioParamInput} from '../types/audio-param-input';
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
    @Input('detune')
    @audioParam('detune')
    public detuneParam?: AudioParamInput | string;

    @Input('frequency')
    @audioParam('frequency')
    public frequencyParam?: AudioParamInput | string;

    @Output()
    public ended?: EventEmitter<void>;

    constructor(
        @Attribute('autoplay') autoplay: string | null,
        @Attribute('detune') detuneArg: string | null,
        @Attribute('frequency') frequencyArg: string | null,
    ) {
        const context = inject(AUDIO_CONTEXT);
        const modern = inject(CONSTRUCTOR_SUPPORT);
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

    protected static init(
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

    @Input()
    public set periodicWave(periodicWave: PeriodicWave) {
        this.setPeriodicWave(periodicWave);
    }

    public ngOnDestroy(): void {
        try {
            this.stop();
        } catch {
            // noop
        }

        this.disconnect();
    }
}
