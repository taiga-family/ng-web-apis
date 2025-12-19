import {inject, Pipe, type PipeTransform} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';

@Pipe({name: 'waPeriodicWave'})
export class WaPeriodicWavePipe implements PipeTransform {
    private readonly context = inject(WA_AUDIO_CONTEXT);

    /**
     * Creates {@link PeriodicWave} to use with {@link OscillatorNode}
     *
     * @param real cosine terms (traditionally the A terms)
     * @param imag sine terms (traditionally the B terms)
     * @param disableNormalization see {@lin PeriodicWaveConstraints}
     */
    public transform(
        real: number[],
        imag?: number[],
        disableNormalization?: boolean,
    ): PeriodicWave {
        return this.context.createPeriodicWave(
            new Float32Array(real),
            imag ? new Float32Array(imag) : new Float32Array(real.length),
            {disableNormalization: !!disableNormalization},
        );
    }
}
