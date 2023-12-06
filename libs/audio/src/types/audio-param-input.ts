import {AudioParamAutomation} from './audio-param-automation';
import {AudioParamCurve} from './audio-param-curve';

export type AudioParamInput =
    | Array<AudioParamAutomation | AudioParamCurve>
    | AudioParamAutomation
    | AudioParamCurve
    | number;
