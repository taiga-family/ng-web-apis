import type {OnDestroy} from '@angular/core';
import {Attribute, Directive, inject, Input} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import type {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {parse} from '../utils/parse';

@Directive({
    standalone: true,
    selector: '[waBiquadFilterNode]',
    inputs: ['type', 'channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioBiquadFilter)],
    exportAs: 'AudioNode',
})
export class WebAudioBiquadFilter extends BiquadFilterNode implements OnDestroy {
    @Input('detune')
    @audioParam('detune')
    public detuneParam?: AudioParamInput;

    @Input('frequency')
    @audioParam('frequency')
    public frequencyParam?: AudioParamInput;

    @Input('gain')
    @audioParam('gain')
    public gainParam?: AudioParamInput;

    @Input('Q')
    @audioParam('Q')
    public qParam?: AudioParamInput;

    // eslint-disable-next-line @typescript-eslint/max-params
    constructor(
        @Attribute('detune') detuneArg: string | null,
        @Attribute('frequency') frequencyArg: string | null,
        @Attribute('gain') gainArg: string | null,
        @Attribute('Q') QArg: string | null,
    ) {
        const context = inject(AUDIO_CONTEXT);
        const modern = inject(CONSTRUCTOR_SUPPORT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const detune = parse(detuneArg, 0);
        const frequency = parse(frequencyArg, 350);
        const gain = parse(gainArg, 0);
        const Q = parse(QArg, 1);

        if (modern) {
            super(context, {detune, frequency, gain, Q});
            connect(node, this);
        } else {
            const result = context.createBiquadFilter() as WebAudioBiquadFilter;

            Object.setPrototypeOf(result, WebAudioBiquadFilter.prototype);

            result.detune.value = detune;
            result.frequency.value = frequency;
            result.gain.value = gain;
            result.Q.value = Q;

            connect(node, result);

            return result;
        }
    }

    protected static init(that: WebAudioBiquadFilter, node: AudioNode | null): void {
        connect(node, that);
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
