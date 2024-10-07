import {isApple} from './is-apple';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export function isIos(navigator: Navigator): boolean {
    return (
        IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) ||
        (isApple(navigator) && navigator.maxTouchPoints > 1)
    );
}
