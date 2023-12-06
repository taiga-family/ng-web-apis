import {Inject, Pipe, PipeTransform} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';

@Pipe({
    name: `waPeriodicWave`,
})
export class WebAudioPeriodicWavePipe implements PipeTransform {
    constructor(@Inject(AUDIO_CONTEXT) private readonly context: BaseAudioContext) {}

    /**
     * Creates {@link PeriodicWave} to use with {@link OscillatorNode}
     *
     * @param real cosine terms (traditionally the A terms)
     * @param imag sine terms (traditionally the B terms)
     * @param disableNormalization see {@lin PeriodicWaveConstraints}
     */
    transform(
        real: number[],
        imag?: number[],
        disableNormalization?: boolean,
    ): PeriodicWave {
        return this.context.createPeriodicWave(
            new Float32Array(real),
            imag ? new Float32Array(imag) : new Float32Array(real.length),
            {
                disableNormalization: !!disableNormalization,
            },
        );
    }
}
