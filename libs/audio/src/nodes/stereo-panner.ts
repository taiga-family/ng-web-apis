import type {OnDestroy} from '@angular/core';
import {Attribute, Directive, inject, Input} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import type {AudioParamInput} from '../types/audio-param-input';
import {connect} from '../utils/connect';
import {fallbackAudioParam} from '../utils/fallback-audio-param';
import {parse} from '../utils/parse';
import {processAudioParam} from '../utils/process-audio-param';

@Directive({
    standalone: true,
    selector: '[waStereoPannerNode]',
    inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioStereoPanner)],
    exportAs: 'AudioNode',
})
export class WebAudioStereoPanner extends StereoPannerNode implements OnDestroy {
    constructor(@Attribute('pan') panArg: string | null) {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const pan = parse(panArg, 0);

        try {
            // eslint-disable-next-line
            new StereoPannerNode(context);
        } catch {
            const result = context.createPanner() as unknown as WebAudioStereoPanner;

            Object.setPrototypeOf(result, WebAudioStereoPanner.prototype);
            result.fallbackToPannerNode(fallbackAudioParam(pan));
            connect(node, result);

            return result;
        }

        super(context, {pan});
        connect(node, this);
    }

    @Input('pan')
    public set panParam(pan: AudioParamInput) {
        if ('setPosition' in this) {
            /** fallback for browsers not supporting {@link StereoPannerNode} */
            // @ts-ignore
            this.fallbackToPannerNode(fallbackAudioParam(pan));
        } else {
            processAudioParam(this.pan, pan, this.context.currentTime);
        }
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }

    private fallbackToPannerNode(pan: number): void {
        const xDeg = pan * 100;
        const zDeg = xDeg > 0 ? 270 - xDeg : xDeg + 90;
        const x = Math.sin(xDeg * (Math.PI / 180));
        const z = Math.sin(zDeg * (Math.PI / 180));

        // @ts-ignore
        this.setPosition(x, 0, z);
    }
}
