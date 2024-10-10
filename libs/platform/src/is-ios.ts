import {inject, InjectionToken} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';

import {isApple} from './is-apple';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export function isIos(navigator: Navigator): boolean {
    return (
        IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) ||
        (isApple(navigator) && navigator.maxTouchPoints > 1)
    );
}

export const WA_IS_IOS = new InjectionToken<boolean>('', {
    factory: () => isIos(inject(WA_NAVIGATOR)),
});
