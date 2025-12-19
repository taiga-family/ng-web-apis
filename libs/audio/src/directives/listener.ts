import {Directive, inject} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {type AudioParamInput} from '../types/audio-param-input';
import {audioParam} from '../utils/audio-param';

@Directive({
    selector: '[waAudioContext],[waOfflineAudioContext][length][sampleRate]',
    inputs: [
        'forwardXSetter: forwardX',
        'forwardYSetter: forwardY',
        'forwardZSetter: forwardZ',
        'positionXSetter: positionX',
        'positionYSetter: positionY',
        'positionZSetter: positionZ',
        'upXSetter: upX',
        'upYSetter: upY',
        'upZSetter: upZ',
    ],
})
export class WaListener extends GainNode {
    constructor() {
        super(inject(WA_AUDIO_CONTEXT, {self: true}));
    }

    public set forwardXSetter(value: AudioParamInput) {
        audioParam(this.context.listener.forwardX, value, this.context.currentTime);
    }

    public set forwardYSetter(value: AudioParamInput) {
        audioParam(this.context.listener.forwardY, value, this.context.currentTime);
    }

    public set forwardZSetter(value: AudioParamInput) {
        audioParam(this.context.listener.forwardZ, value, this.context.currentTime);
    }

    public set positionXSetter(value: AudioParamInput) {
        audioParam(this.context.listener.positionX, value, this.context.currentTime);
    }

    public set positionYSetter(value: AudioParamInput) {
        audioParam(this.context.listener.positionY, value, this.context.currentTime);
    }

    public set positionZSetter(value: AudioParamInput) {
        audioParam(this.context.listener.positionZ, value, this.context.currentTime);
    }

    public set upXSetter(value: AudioParamInput) {
        audioParam(this.context.listener.upX, value, this.context.currentTime);
    }

    public set upYSetter(value: AudioParamInput) {
        audioParam(this.context.listener.upX, value, this.context.currentTime);
    }

    public set upZSetter(value: AudioParamInput) {
        audioParam(this.context.listener.upX, value, this.context.currentTime);
    }
}
