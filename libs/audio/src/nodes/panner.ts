import {Directive, inject, Input, type OnChanges, type OnDestroy} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {type AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {fallbackAudioParam} from '../utils/fallback-audio-param';

@Directive({
    standalone: true,
    selector: '[waPannerNode]',
    inputs: [
        'coneInnerAngle',
        'coneOuterAngle',
        'coneOuterGain',
        'distanceModel',
        'maxDistance',
        'panningModel',
        'refDistance',
        'rolloffFactor',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WebAudioPanner)],
    exportAs: 'AudioNode',
})
export class WebAudioPanner extends PannerNode implements OnDestroy, OnChanges {
    @Input()
    @audioParam('orientationX')
    public orientationXParam?: AudioParamInput;

    @Input()
    @audioParam('orientationY')
    public orientationYParam?: AudioParamInput;

    @Input()
    @audioParam('orientationZ')
    public orientationZParam?: AudioParamInput;

    @Input()
    @audioParam('positionX')
    public positionXParam?: AudioParamInput;

    @Input()
    @audioParam('positionY')
    public positionYParam?: AudioParamInput;

    @Input()
    @audioParam('positionZ')
    public positionZParam?: AudioParamInput;

    constructor() {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const modern = inject(CONSTRUCTOR_SUPPORT);

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

    public ngOnChanges(): void {
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

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
