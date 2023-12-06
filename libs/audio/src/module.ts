import {NgModule} from '@angular/core';

import {WebAudioContext} from './directives/audio-context';
import {WebAudioChannel} from './directives/channel';
import {WebAudioDestination} from './directives/destination';
import {WebAudioListener} from './directives/listener';
import {WebAudioOfflineContext} from './directives/offline-audio-context';
import {WebAudioOutput} from './directives/output';
import {WebAudioMediaStreamDestination} from './directives/stream-destination';
import {WebAudioAnalyser} from './nodes/analyser';
import {WebAudioBiquadFilter} from './nodes/biquad-filter';
import {WebAudioChannelMerger} from './nodes/channel-merger';
import {WebAudioChannelSplitter} from './nodes/channel-splitter';
import {WebAudioConvolver} from './nodes/convolver';
import {WebAudioDelay} from './nodes/delay';
import {WebAudioDynamicsCompressor} from './nodes/dynamics-compressor';
import {WebAudioGain} from './nodes/gain';
import {WebAudioIIRFilter} from './nodes/iir-filter';
import {WebAudioPanner} from './nodes/panner';
import {WebAudioScriptProcessor} from './nodes/script-processor';
import {WebAudioStereoPanner} from './nodes/stereo-panner';
import {WebAudioWaveShaper} from './nodes/wave-shaper';
import {WebAudioWorklet} from './nodes/worklet';
import {WebAudioParamPipe} from './pipes/audio-param.pipe';
import {WebAudioPeriodicWavePipe} from './pipes/periodic-wave.pipe';
import {WebAudioBufferSource} from './sources/buffer-source';
import {WebAudioConstantSource} from './sources/constant-source';
import {WebAudioMediaSource} from './sources/media-source';
import {WebAudioMediaStreamSource} from './sources/media-stream-source';
import {WebAudioOscillator} from './sources/oscillator';

@NgModule({
    declarations: [
        WebAudioContext,
        WebAudioChannel,
        WebAudioDestination,
        WebAudioListener,
        WebAudioOfflineContext,
        WebAudioOutput,
        WebAudioMediaStreamDestination,
        WebAudioBufferSource,
        WebAudioConstantSource,
        WebAudioMediaSource,
        WebAudioMediaStreamSource,
        WebAudioOscillator,
        WebAudioAnalyser,
        WebAudioBiquadFilter,
        WebAudioChannelSplitter,
        WebAudioChannelMerger,
        WebAudioConvolver,
        WebAudioDelay,
        WebAudioDynamicsCompressor,
        WebAudioGain,
        WebAudioIIRFilter,
        WebAudioPanner,
        WebAudioScriptProcessor,
        WebAudioStereoPanner,
        WebAudioWaveShaper,
        WebAudioWorklet,
        WebAudioParamPipe,
        WebAudioPeriodicWavePipe,
    ],
    exports: [
        WebAudioContext,
        WebAudioChannel,
        WebAudioDestination,
        WebAudioListener,
        WebAudioOfflineContext,
        WebAudioOutput,
        WebAudioMediaStreamDestination,
        WebAudioBufferSource,
        WebAudioConstantSource,
        WebAudioMediaSource,
        WebAudioMediaStreamSource,
        WebAudioOscillator,
        WebAudioAnalyser,
        WebAudioBiquadFilter,
        WebAudioChannelSplitter,
        WebAudioChannelMerger,
        WebAudioConvolver,
        WebAudioDelay,
        WebAudioDynamicsCompressor,
        WebAudioGain,
        WebAudioIIRFilter,
        WebAudioPanner,
        WebAudioScriptProcessor,
        WebAudioStereoPanner,
        WebAudioWaveShaper,
        WebAudioWorklet,
        WebAudioParamPipe,
        WebAudioPeriodicWavePipe,
    ],
})
export class WebAudioModule {}
