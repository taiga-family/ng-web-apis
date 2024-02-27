import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AUDIO_CONTEXT, WebAudioModule} from '@ng-web-apis/audio';
import {CanvasModule} from '@ng-web-apis/canvas';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiRadioLabeledModule,
    TuiSelectModule,
    TuiSliderModule,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'audio-page',
    imports: [
        CommonModule,
        FormsModule,
        WebAudioModule,
        CanvasModule,
        TuiButtonModule,
        TuiSliderModule,
        TuiLabelModule,
        TuiSelectModule,
        TuiRadioLabeledModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperModule,
    ],
    templateUrl: './audio-page.component.html',
    styleUrls: ['./audio-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AudioPageComponent {
    private readonly context = inject<AudioContext>(AUDIO_CONTEXT);

    @ViewChild('chain')
    readonly chain?: AudioNode;

    buffers = [Date.now()];

    selectedChain = 'dry';

    selectedSource = 'buffer';

    gain = 1;

    pan = 0;

    delayTime = 1;

    delayGain = 0.5;

    distortion = 20;

    frequency = 350;

    detune = 0;

    filterGain = 0;

    Q = 1;

    type: BiquadFilterType = 'lowpass';

    curve = makeDistortionCurve(this.distortion);

    started = false;

    fftSize = 2048;

    path = '';

    readonly items = [
        'lowpass',
        'highpass',
        'bandpass',
        'lowshelf',
        'highshelf',
        'peaking',
        'notch',
        'allpass',
    ];

    readonly real = [0, 0, 1, 0, 1];

    get distortionCompensation(): number {
        return 1.2 - this.distortion / 20;
    }

    start(): void {
        this.started = true;
        void this.context.resume();
    }

    getTransform({width, height}: HTMLCanvasElement): string {
        return `scale(${width / this.fftSize}, ${height / 2})`;
    }

    onCurveChange(distortion: number): void {
        this.distortion = distortion;
        this.curve = makeDistortionCurve(distortion);
    }

    onClick(source: AudioScheduledSourceNode, button: HTMLButtonElement): void {
        if (button.textContent!.trim() === 'Play') {
            button.textContent = 'Stop';
            source.start();
        } else {
            this.buffers[0] = Date.now();
        }
    }

    onTimeDomain(array: Uint8Array): void {
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
