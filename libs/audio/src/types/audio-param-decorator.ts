import type {AudioNodeWithParams} from './audio-node-with-params';

export type AudioParamDecorator<K extends string> = (
    target: AudioNodeWithParams<K>,
    propertyKey: string,
) => void;

export type AudioParamWorkletDecorator = (
    target: AudioWorkletNode,
    propertyKey: string,
) => void;
