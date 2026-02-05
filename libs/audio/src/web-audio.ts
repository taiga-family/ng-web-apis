import {WaAudioContext} from './directives/audio-context';
import {WaChannel} from './directives/channel';
import {WaDestination} from './directives/destination';
import {WaListener} from './directives/listener';
import {WaOfflineContext} from './directives/offline-audio-context';
import {WaOutput} from './directives/output';
import {WaMediaStreamDestination} from './directives/stream-destination';
import {WaAnalyser} from './nodes/analyser';
import {WaBiquadFilter} from './nodes/biquad-filter';
import {WaChannelMerger} from './nodes/channel-merger';
import {WaChannelSplitter} from './nodes/channel-splitter';
import {WaConvolver} from './nodes/convolver';
import {WaDelay} from './nodes/delay';
import {WaDynamicsCompressor} from './nodes/dynamics-compressor';
import {WaGain} from './nodes/gain';
import {WaIIRFilter} from './nodes/iir-filter';
import {WaPanner} from './nodes/panner';
import {WaStereoPanner} from './nodes/stereo-panner';
import {WaWaveShaper} from './nodes/wave-shaper';
import {WaWorklet} from './nodes/worklet';
import {WaAudioParamPipe} from './pipes/audio-param.pipe';
import {WaPeriodicWavePipe} from './pipes/periodic-wave.pipe';
import {WaBufferSource} from './sources/buffer-source';
import {WaConstantSource} from './sources/constant-source';
import {WaMediaSource} from './sources/media-source';
import {WaMediaStreamSource} from './sources/media-stream-source';
import {WaOscillator} from './sources/oscillator';

export const WaWebAudio = [
    WaAudioContext,
    WaChannel,
    WaDestination,
    WaListener,
    WaOfflineContext,
    WaOutput,
    WaMediaStreamDestination,
    WaBufferSource,
    WaConstantSource,
    WaMediaSource,
    WaMediaStreamSource,
    WaOscillator,
    WaAnalyser,
    WaBiquadFilter,
    WaChannelSplitter,
    WaChannelMerger,
    WaConvolver,
    WaDelay,
    WaDynamicsCompressor,
    WaGain,
    WaIIRFilter,
    WaPanner,
    WaStereoPanner,
    WaWaveShaper,
    WaWorklet,
    WaAudioParamPipe,
    WaPeriodicWavePipe,
] as const;
