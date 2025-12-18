import {inject, InjectionToken} from '@angular/core';

import {WA_IS_IOS} from './is-ios';
import {WA_IS_MOBILE} from './is-mobile';

export const WA_IS_ANDROID = new InjectionToken<boolean>('', {
    factory: () => inject(WA_IS_MOBILE) && !inject(WA_IS_IOS),
});
