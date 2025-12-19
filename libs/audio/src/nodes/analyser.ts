import {Directive, HostAttributeToken, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {animationFrameScheduler, interval, map} from 'rxjs';

import {WaNode} from '../directives/node';
import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {parse} from '../utils/parse';

@Directive({
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
    providers: [asAudioNode(WaAnalyser)],
    exportAs: 'AudioNode',
    hostDirectives: [WaNode],
})
export class WaAnalyser extends AnalyserNode {
    private fByte = new Uint8Array(this.frequencyBinCount);
    private fFloat = new Float32Array(this.frequencyBinCount);
    private tByte = new Uint8Array(this.fftSize);
    private tFloat = new Float32Array(this.fftSize);

    public readonly frequencyByte = outputFromObservable(
        interval(0, animationFrameScheduler).pipe(
            map(() => {
                if (this.fByte.length !== this.frequencyBinCount) {
                    this.fByte = new Uint8Array(this.frequencyBinCount);
                }

                this.getByteFrequencyData(this.fByte);

                return this.fByte;
            }),
        ),
    );

    public readonly frequencyFloat = outputFromObservable(
        interval(0, animationFrameScheduler).pipe(
            map(() => {
                if (this.fFloat.length !== this.frequencyBinCount) {
                    this.fFloat = new Float32Array(this.frequencyBinCount);
                }

                this.getFloatFrequencyData(this.fFloat);

                return this.fFloat;
            }),
        ),
    );

    public readonly timeByte = outputFromObservable(
        interval(0, animationFrameScheduler).pipe(
            map(() => {
                if (this.tByte.length !== this.fftSize) {
                    this.tByte = new Uint8Array(this.frequencyBinCount);
                }

                this.getByteTimeDomainData(this.tByte);

                return this.tByte;
            }),
        ),
    );

    public readonly timeFloat = outputFromObservable(
        interval(0, animationFrameScheduler).pipe(
            map(() => {
                if (this.tFloat.length !== this.fftSize) {
                    this.tFloat = new Float32Array(this.frequencyBinCount);
                }

                this.getFloatTimeDomainData(this.tFloat);

                return this.tFloat;
            }),
        ),
    );

    constructor() {
        const O = {optional: true} as const;
        const fftSize = inject(new HostAttributeToken('fftSize'), O);
        const minDecibels = inject(new HostAttributeToken('minDecibels'), O);
        const maxDecibels = inject(new HostAttributeToken('maxDecibels'), O);
        const time = inject(new HostAttributeToken('smoothingTimeConstant'), O);

        super(inject(WA_AUDIO_CONTEXT), {
            fftSize: parse(fftSize, 2048),
            maxDecibels: parse(maxDecibels, -30),
            minDecibels: parse(minDecibels, -100),
            smoothingTimeConstant: parse(time, 0.8),
        });
    }
}
