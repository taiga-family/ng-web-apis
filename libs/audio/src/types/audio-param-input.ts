import {type AudioParamAutomation} from './audio-param-automation';
import {type AudioParamCurve} from './audio-param-curve';

export type AudioParamInput =
    | Array<AudioParamAutomation | AudioParamCurve>
    | AudioParamAutomation
    | AudioParamCurve
    | number
    | string;
