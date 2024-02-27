import {inject, Pipe, PipeTransform} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';

@Pipe({
    standalone: true,
    name: 'waPeriodicWave',
})
export class WebAudioPeriodicWavePipe implements PipeTransform {
    private readonly context = inject(AUDIO_CONTEXT);

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
            {
                disableNormalization: !!disableNormalization,
            },
        );
    }
}
