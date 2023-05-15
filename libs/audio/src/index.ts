/**
 * Public API Surface of @ng-web-apis/audio
 */
export * from './decorators/audio-param';

export * from './directives/audio-context';
export * from './directives/channel';
export * from './directives/destination';
export * from './directives/listener';
export * from './directives/offline-audio-context';
export * from './directives/output';
export * from './directives/stream-destination';

export * from './nodes/analyser';
export * from './nodes/biquad-filter';
export * from './nodes/channel-merger';
export * from './nodes/channel-splitter';
export * from './nodes/convolver';
export * from './nodes/delay';
export * from './nodes/dynamics-compressor';
export * from './nodes/gain';
export * from './nodes/iir-filter';
export * from './nodes/panner';
export * from './nodes/script-processor';
export * from './nodes/stereo-panner';
export * from './nodes/wave-shaper';
export * from './nodes/worklet';

export * from './pipes/audio-param.pipe';
export * from './pipes/periodic-wave.pipe';

export * from './services/audio-buffer.service';

export * from './sources/buffer-source';
export * from './sources/constant-source';
export * from './sources/media-source';
export * from './sources/media-stream-source';
export * from './sources/oscillator';

export * from './tokens/audio-context';
export * from './tokens/audio-node';
export * from './tokens/audio-worklet-processors';
export * from './tokens/audio-worklet-processors-ready';
export * from './tokens/audio-worklet-support';
export * from './tokens/feedback-coefficients';
export * from './tokens/feedforward-coefficients';
export * from './tokens/media-stream';
export * from './tokens/support';

export * from './types/audio-param-input';
export * from './types/audio-param-automation';
export * from './types/audio-param-automation-mode';
export * from './types/audio-param-curve';

export * from './module';
