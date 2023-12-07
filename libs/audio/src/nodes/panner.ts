import {Directive, Inject, Input, OnChanges, OnDestroy, SkipSelf} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {fallbackAudioParam} from '../utils/fallback-audio-param';

@Directive({
    standalone: true,
    selector: `[waPannerNode]`,
    inputs: [
        `coneInnerAngle`,
        `coneOuterAngle`,
        `coneOuterGain`,
        `distanceModel`,
        `maxDistance`,
        `panningModel`,
        `refDistance`,
        `rolloffFactor`,
        `channelCount`,
        `channelCountMode`,
        `channelInterpretation`,
    ],
    providers: [asAudioNode(WebAudioPanner)],
    exportAs: `AudioNode`,
})
export class WebAudioPanner extends PannerNode implements OnDestroy, OnChanges {
    @Input()
    @audioParam(`orientationX`)
    orientationXParam?: AudioParamInput;

    @Input()
    @audioParam(`orientationY`)
    orientationYParam?: AudioParamInput;

    @Input()
    @audioParam(`orientationZ`)
    orientationZParam?: AudioParamInput;

    @Input()
    @audioParam(`positionX`)
    positionXParam?: AudioParamInput;

    @Input()
    @audioParam(`positionY`)
    positionYParam?: AudioParamInput;

    @Input()
    @audioParam(`positionZ`)
    positionZParam?: AudioParamInput;

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    ) {
        if (modern) {
            super(context);
            connect(node, this);
        } else {
            const result = context.createPanner() as WebAudioPanner;

            Object.setPrototypeOf(result, WebAudioPanner.prototype);
            connect(node, result);

            return result;
        }
    }

    ngOnChanges(): void {
        if (this.positionX instanceof AudioParam) {
            return;
        }

        // Fallback for older browsers
        this.setOrientation(
            fallbackAudioParam(this.orientationXParam),
            fallbackAudioParam(this.orientationYParam),
            fallbackAudioParam(this.orientationZParam),
        );
        this.setPosition(
            fallbackAudioParam(this.positionXParam),
            fallbackAudioParam(this.positionYParam),
            fallbackAudioParam(this.positionZParam),
        );
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}
