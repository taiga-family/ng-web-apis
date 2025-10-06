import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AUDIO_CONTEXT, WaWebAudio} from '@ng-web-apis/audio';
import {CanvasModule} from '@ng-web-apis/canvas';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiRadio, TuiSlider} from '@taiga-ui/kit';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'audio-page',
    imports: [
        CanvasModule,
        CommonModule,
        FormsModule,
        TuiButton,
        TuiDataListWrapper,
        TuiLabel,
        TuiRadio,
        TuiSelectModule,
        TuiSlider,
        TuiTextfieldControllerModule,
        WaWebAudio,
    ],
    templateUrl: './audio-page.component.html',
    styleUrl: './audio-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AudioPage {
    private readonly context = inject<AudioContext>(AUDIO_CONTEXT);

    protected readonly chain = viewChild<AudioNode>('chain');

    protected buffers = [Date.now()];

    protected selectedChain = 'dry';

    protected selectedSource = 'buffer';

    protected gain = 1;

    protected pan = 0;

    protected delayTime = 1;

    protected delayGain = 0.5;

    protected distortion = 20;

    protected frequency = 350;

    protected detune = 0;

    protected filterGain = 0;

    protected q = 1;

    protected type: BiquadFilterType = 'lowpass';

    protected curve = makeDistortionCurve(this.distortion);

    protected started = false;

    protected fftSize = 2048;

    protected path = '';

    protected readonly items = [
        'lowpass',
        'highpass',
        'bandpass',
        'lowshelf',
        'highshelf',
        'peaking',
        'notch',
        'allpass',
    ];

    protected readonly real = [0, 0, 1, 0, 1];

    protected get distortionCompensation(): number {
        return 1.2 - this.distortion / 20;
    }

    protected start(): void {
        this.started = true;
        void this.context.resume();
    }

    protected getTransform({width, height}: HTMLCanvasElement): string {
        return `scale(${width / this.fftSize}, ${height / 2})`;
    }

    protected onCurveChange(distortion: number): void {
        this.distortion = distortion;
        this.curve = makeDistortionCurve(distortion);
    }

    protected onClick(source: AudioScheduledSourceNode, button: HTMLButtonElement): void {
        if (button.textContent!.trim() === 'Play') {
            button.textContent = 'Stop';
            source.start();
        } else {
            this.buffers[0] = Date.now();
        }
    }

    protected onTimeDomain(array: Uint8Array): void {
        this.path = array.reduce(
            (path, value, index) => `${path} L ${index} ${value / 128}`,
            'M 0 0',
        );
    }
}

function makeDistortionCurve(amount: number): Float32Array {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;

    for (let i = 0; i < samples; ++i) {
        const x = (i * 2) / samples - 1;

        curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }

    return curve;
}
