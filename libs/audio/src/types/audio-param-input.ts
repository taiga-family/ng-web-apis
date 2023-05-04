import {AudioParamAutomation} from './audio-param-automation';
import {AudioParamCurve} from './audio-param-curve';

export type AudioParamInput =
    | number
    | AudioParamCurve
    | AudioParamAutomation
    | Array<AudioParamAutomation | AudioParamCurve>;
