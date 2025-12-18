import {WA_IOS_REG_EXP as ios, WA_SAFARI_REG_EXP as safari} from './constants';

export function isIos({userAgent, maxTouchPoints}: Navigator): boolean {
    return ios.test(userAgent) || (safari.test(userAgent) && maxTouchPoints > 1);
}
