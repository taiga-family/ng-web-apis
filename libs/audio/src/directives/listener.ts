import {Directive, inject, Input, OnChanges} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {fallbackAudioParam} from '../utils/fallback-audio-param';

@Directive({
    standalone: true,
    selector: '[waAudioContext],[waOfflineAudioContext][length][sampleRate]',
})
export class WebAudioListener extends GainNode implements OnChanges {
    @Input('forwardX')
    @audioParam('forwardX')
    public forwardXParam?: AudioParamInput;

    @Input('forwardY')
    @audioParam('forwardY')
    public forwardYParam?: AudioParamInput;

    @Input('forwardZ')
    @audioParam('forwardZ')
    public forwardZParam?: AudioParamInput;

    @Input('positionX')
    @audioParam('positionX')
    public positionXParam?: AudioParamInput;

    @Input('positionY')
    @audioParam('positionY')
    public positionYParam?: AudioParamInput;

    @Input('positionZ')
    @audioParam('positionZ')
    public positionZParam?: AudioParamInput;

    @Input('upX')
    @audioParam('upX')
    public upXParam?: AudioParamInput;

    @Input('upY')
    @audioParam('upY')
    public upYParam?: AudioParamInput;

    @Input('upZ')
    @audioParam('upZ')
    public upZParam?: AudioParamInput;

    constructor() {
        const context = inject(AUDIO_CONTEXT, {self: true});
        const modern = inject(CONSTRUCTOR_SUPPORT);

        if (modern) {
            super(context);
        } else {
            const result = context.createGain();

            Object.setPrototypeOf(result, WebAudioListener.prototype);

            return result as WebAudioListener;
        }
    }

    public get forwardX(): AudioParam {
        return this.context.listener.forwardX;
    }

    public get forwardY(): AudioParam {
        return this.context.listener.forwardY;
    }

    public get forwardZ(): AudioParam {
        return this.context.listener.forwardZ;
    }

    public get positionX(): AudioParam {
        return this.context.listener.positionX;
    }

    public get positionY(): AudioParam {
        return this.context.listener.positionY;
    }

    public get positionZ(): AudioParam {
        return this.context.listener.positionZ;
    }

    public get upX(): AudioParam {
        return this.context.listener.upX;
    }

    public get upY(): AudioParam {
        return this.context.listener.upY;
    }

    public get upZ(): AudioParam {
        return this.context.listener.upZ;
    }

    public ngOnChanges(): void {
        if (this.context.listener.positionX instanceof AudioParam) {
            return;
        }

        // Fallback for older browsers
        this.context.listener.setOrientation(
            fallbackAudioParam(this.forwardXParam),
            fallbackAudioParam(this.forwardYParam),
            fallbackAudioParam(this.forwardZParam),
            fallbackAudioParam(this.upXParam),
            fallbackAudioParam(this.upYParam),
            fallbackAudioParam(this.upZParam),
        );
        this.context.listener.setPosition(
            fallbackAudioParam(this.positionXParam),
            fallbackAudioParam(this.positionYParam),
            fallbackAudioParam(this.positionZParam),
        );
    }
}
