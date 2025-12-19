import {Directive, inject} from '@angular/core';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';

@Directive({
    selector: '[waPannerNode]',
    inputs: [
        'orientationXSetter: orientationX',
        'orientationYSetter: orientationY',
        'orientationZSetter: orientationZ',
        'positionXSetter: positionX',
        'positionYSetter: positionY',
        'positionZSetter: positionZ',
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
    providers: [asAudioNode(WaPanner)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaPanner extends PannerNode {
    constructor() {
        super(inject(WA_AUDIO_CONTEXT));
    }

    public set orientationXSetter(value: AudioParamInput) {
        audioParam(this.orientationX, value, this.context.currentTime);
    }

    public set orientationYSetter(value: AudioParamInput) {
        audioParam(this.orientationY, value, this.context.currentTime);
    }

    public set orientationZSetter(value: AudioParamInput) {
        audioParam(this.orientationZ, value, this.context.currentTime);
    }

    public set positionXSetter(value: AudioParamInput) {
        audioParam(this.positionX, value, this.context.currentTime);
    }

    public set positionYSetter(value: AudioParamInput) {
        audioParam(this.positionY, value, this.context.currentTime);
    }

    public set positionZSetter(value: AudioParamInput) {
        audioParam(this.positionZ, value, this.context.currentTime);
    }
}
