import type {AudioParamAutomationMode} from './audio-param-automation-mode';

export type AudioParamAutomation = Readonly<{
    value: number;
    duration: number;
    mode: AudioParamAutomationMode;
}>;
