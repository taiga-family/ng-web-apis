import {Directive, Inject, Input, OnChanges, Self} from '@angular/core';

import {audioParam} from '../decorators/audio-param';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {fallbackAudioParam} from '../utils/fallback-audio-param';

@Directive({
    selector: `[waAudioContext],[waOfflineAudioContext][length][sampleRate]`,
})
export class WebAudioListener extends GainNode implements OnChanges {
    @Input(`forwardX`)
    @audioParam(`forwardX`)
    forwardXParam?: AudioParamInput;

    @Input(`forwardY`)
    @audioParam(`forwardY`)
    forwardYParam?: AudioParamInput;

    @Input(`forwardZ`)
    @audioParam(`forwardZ`)
    forwardZParam?: AudioParamInput;

    @Input(`positionX`)
    @audioParam(`positionX`)
    positionXParam?: AudioParamInput;

    @Input(`positionY`)
    @audioParam(`positionY`)
    positionYParam?: AudioParamInput;

    @Input(`positionZ`)
    @audioParam(`positionZ`)
    positionZParam?: AudioParamInput;

    @Input(`upX`)
    @audioParam(`upX`)
    upXParam?: AudioParamInput;

    @Input(`upY`)
    @audioParam(`upY`)
    upYParam?: AudioParamInput;

    @Input(`upZ`)
    @audioParam(`upZ`)
    upZParam?: AudioParamInput;

    constructor(
        @Self() @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    ) {
        if (modern) {
            super(context);
        } else {
            const result = context.createGain();

            Object.setPrototypeOf(result, WebAudioListener.prototype);

            return result as WebAudioListener;
        }
    }

    get forwardX(): AudioParam {
        return this.context.listener.forwardX;
    }

    get forwardY(): AudioParam {
        return this.context.listener.forwardY;
    }

    get forwardZ(): AudioParam {
        return this.context.listener.forwardZ;
    }

    get positionX(): AudioParam {
        return this.context.listener.positionX;
    }

    get positionY(): AudioParam {
        return this.context.listener.positionY;
    }

    get positionZ(): AudioParam {
        return this.context.listener.positionZ;
    }

    get upX(): AudioParam {
        return this.context.listener.upX;
    }

    get upY(): AudioParam {
        return this.context.listener.upY;
    }

    get upZ(): AudioParam {
        return this.context.listener.upZ;
    }

    ngOnChanges(): void {
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
