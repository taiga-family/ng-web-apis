import {Attribute, Directive, Inject, Input, OnDestroy, SkipSelf} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {parse} from '../utils/parse';

@Directive({
    standalone: true,
    selector: `[waDynamicsCompressorNode]`,
    inputs: [`channelCount`, `channelCountMode`, `channelInterpretation`],
    providers: [asAudioNode(WebAudioDynamicsCompressor)],
    exportAs: `AudioNode`,
})
export class WebAudioDynamicsCompressor
    extends DynamicsCompressorNode
    implements OnDestroy
{
    @Input(`attack`)
    @audioParam(`attack`)
    attackParam?: AudioParamInput;

    @Input(`knee`)
    @audioParam(`knee`)
    kneeParam?: AudioParamInput;

    @Input(`ratio`)
    @audioParam(`ratio`)
    ratioParam?: AudioParamInput;

    @Input(`release`)
    @audioParam(`release`)
    releaseParam?: AudioParamInput;

    @Input(`threshold`)
    @audioParam(`threshold`)
    thresholdParam?: AudioParamInput;

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
        @Attribute(`attack`) attackArg: string | null,
        @Attribute(`knee`) kneeArg: string | null,
        @Attribute(`ratio`) ratioArg: string | null,
        @Attribute(`release`) releaseArg: string | null,
        @Attribute(`threshold`) thresholdArg: string | null,
    ) {
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

    ngOnDestroy(): void {
        this.disconnect();
    }
}
