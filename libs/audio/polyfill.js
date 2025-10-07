/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * @type {Window | undefined}
 */
const windowRef = typeof window === 'undefined' ? globalThis : window;

windowRef.AudioContext =
    windowRef.AudioContext || windowRef.webkitAudioContext || function () {};

windowRef.GainNode = windowRef.GainNode || function () {};

windowRef.ConvolverNode = windowRef.ConvolverNode || function () {};

windowRef.MediaElementAudioSourceNode =
    windowRef.MediaElementAudioSourceNode || function () {};

windowRef.BiquadFilterNode = windowRef.BiquadFilterNode || function () {};

windowRef.OscillatorNode = windowRef.OscillatorNode || function () {};

windowRef.DelayNode = windowRef.DelayNode || function () {};

windowRef.AudioBufferSourceNode = windowRef.AudioBufferSourceNode || function () {};

windowRef.PannerNode =
    windowRef.PannerNode || windowRef.webkitAudioPannerNode || function () {};

windowRef.StereoPannerNode =
    windowRef.StereoPannerNode || windowRef.PannerNode || function () {};

if (windowRef.AnalyserNode && !windowRef.AnalyserNode.prototype.getFloatTimeDomainData) {
    windowRef.AnalyserNode.prototype.getFloatTimeDomainData = function (array) {
        const uint8 = new Uint8Array(this.fftSize);

        this.getByteTimeDomainData(uint8);

        for (let i = 0, imax = array.length; i < imax; i++) {
            array[i] = (uint8[i] - 128) * 0.0078125;
        }
    };
}

windowRef.AnalyserNode = windowRef.AnalyserNode || function () {};

windowRef.WaveShaperNode = windowRef.WaveShaperNode || function () {};

// Just to compile in old browsers, these features are not supported if not supported natively
windowRef.BaseAudioContext =
    windowRef.BaseAudioContext || windowRef.AudioContext || function () {};

windowRef.OfflineAudioContext =
    windowRef.OfflineAudioContext || windowRef.AudioContext || function () {};

windowRef.ConstantSourceNode = windowRef.ConstantSourceNode || function () {};

windowRef.AudioWorkletNode = windowRef.AudioWorkletNode || function () {};

windowRef.IIRFilterNode = windowRef.IIRFilterNode || function () {};

windowRef.MediaStreamAudioDestinationNode =
    windowRef.MediaStreamAudioDestinationNode || function () {};

windowRef.MediaStreamAudioSourceNode =
    windowRef.MediaStreamAudioSourceNode || function () {};
