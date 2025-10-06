// eslint-disable-next-line no-restricted-imports
import {Attribute, Directive, inject, type OnDestroy, Output} from '@angular/core';
import {animationFrameScheduler, interval, map, type Observable, share} from 'rxjs';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';
import {parse} from '../utils/parse';

@Directive({
    standalone: true,
    selector: '[waAnalyserNode]',
    inputs: [
        'fftSize',
        'minDecibels',
        'maxDecibels',
        'smoothingTimeConstant',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WebAudioAnalyser)],
    exportAs: 'AudioNode',
})
export class WebAudioAnalyser extends AnalyserNode implements OnDestroy {
    @Output()
    public frequencyByte$!: Observable<Uint8Array>;

    @Output()
    public frequencyFloat$!: Observable<Float32Array>;

    @Output()
    public timeByte$!: Observable<Uint8Array>;

    @Output()
    public timeFloat$!: Observable<Float32Array>;

    constructor(
        @Attribute('fftSize') fftSizeArg: string | null,
        @Attribute('maxDecibels') maxDecibelsArg: string | null,
        @Attribute('minDecibels') minDecibelsArg: string | null,
        @Attribute('smoothingTimeConstant') smoothingTimeConstantArg: string | null,
    ) {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const modern = inject(CONSTRUCTOR_SUPPORT);
        const fftSize = parse(fftSizeArg, 2048);
        const maxDecibels = parse(maxDecibelsArg, -30);
        const minDecibels = parse(minDecibelsArg, -100);
        const smoothingTimeConstant = parse(smoothingTimeConstantArg, 0.8);

        if (modern) {
            super(context, {fftSize, maxDecibels, minDecibels, smoothingTimeConstant});
            WebAudioAnalyser.init(this, node);
        } else {
            const result = context.createAnalyser() as WebAudioAnalyser;

            Object.setPrototypeOf(result, WebAudioAnalyser.prototype);
            WebAudioAnalyser.init(result, node);

            result.fftSize = fftSize;
            result.maxDecibels = maxDecibels;
            result.minDecibels = minDecibels;
            result.smoothingTimeConstant = smoothingTimeConstant;

            return result;
        }
    }

    protected static init(that: WebAudioAnalyser, node: AudioNode | null): void {
        connect(node, that);

        let freqByte = new Uint8Array(that.frequencyBinCount);
        let freqFloat = new Float32Array(that.frequencyBinCount);
        let timeByte = new Uint8Array(that.fftSize);
        let timeFloat = new Float32Array(that.fftSize);

        that.frequencyByte$ = interval(0, animationFrameScheduler).pipe(
            map(() => {
                if (freqByte.length !== that.frequencyBinCount) {
                    freqByte = new Uint8Array(that.frequencyBinCount);
                }

                that.getByteFrequencyData(freqByte);

                return freqByte;
            }),
            share(),
        );

        that.frequencyFloat$ = interval(0, animationFrameScheduler).pipe(
            map(() => {
                if (freqFloat.length !== that.frequencyBinCount) {
                    freqFloat = new Float32Array(that.frequencyBinCount);
                }

                that.getFloatFrequencyData(freqFloat);

                return freqFloat;
            }),
            share(),
        );

        that.timeByte$ = interval(0, animationFrameScheduler).pipe(
            map(() => {
                if (timeByte.length !== that.fftSize) {
                    timeByte = new Uint8Array(that.frequencyBinCount);
                }

                that.getByteTimeDomainData(timeByte);

                return timeByte;
            }),
            share(),
        );

        that.timeFloat$ = interval(0, animationFrameScheduler).pipe(
            map(() => {
                if (timeFloat.length !== that.fftSize) {
                    timeFloat = new Float32Array(that.frequencyBinCount);
                }

                that.getFloatTimeDomainData(timeFloat);

                return timeFloat;
            }),
            share(),
        );
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}
