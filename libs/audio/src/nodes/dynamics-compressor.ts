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
    selector: '[waDynamicsCompressorNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioDynamicsCompressor)],
    exportAs: 'AudioNode',
})
export class WebAudioDynamicsCompressor
    extends DynamicsCompressorNode
    implements OnDestroy
{
    @Input('attack')
    @audioParam('attack')
    public attackParam?: AudioParamInput;

    @Input('knee')
    @audioParam('knee')
    public kneeParam?: AudioParamInput;

    @Input('ratio')
    @audioParam('ratio')
    public ratioParam?: AudioParamInput;

    @Input('release')
    @audioParam('release')
    public releaseParam?: AudioParamInput;

    @Input('threshold')
    @audioParam('threshold')
    public thresholdParam?: AudioParamInput;

    constructor(
        @Attribute('attack') attackArg: string | null,
        @Attribute('knee') kneeArg: string | null,
        @Attribute('ratio') ratioArg: string | null,
        @Attribute('release') releaseArg: string | null,
        @Attribute('threshold') thresholdArg: string | null,
    ) {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const modern = inject(CONSTRUCTOR_SUPPORT);
        const attack = parse(attackArg, 0.003);
        const knee = parse(kneeArg, 30);
        const ratio = parse(ratioArg, 12);
        const release = parse(releaseArg, 0.25);
        const threshold = parse(thresholdArg, -24);

        if (modern) {
            super(context, {attack, knee, ratio, release, threshold});
            connect(node, this);
        } else {
            const result =
                context.createDynamicsCompressor() as WebAudioDynamicsCompressor;

            Object.setPrototypeOf(result, WebAudioDynamicsCompressor.prototype);
            connect(node, result);
            result.attack.value = attack;
            result.knee.value = knee;
            result.ratio.value = ratio;
            result.release.value = release;
            result.threshold.value = threshold;

            return result;
        }
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
