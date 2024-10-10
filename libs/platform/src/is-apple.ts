import {WA_SAFARI_REG_EXP} from './constants';
import {isIos} from './is-ios';

export function isApple(navigator: Navigator): boolean {
    return isIos(navigator) || WA_SAFARI_REG_EXP.test(navigator.userAgent);
}
