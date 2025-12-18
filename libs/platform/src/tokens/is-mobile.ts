import {inject, InjectionToken} from '@angular/core';
import {WA_USER_AGENT} from '@ng-web-apis/common';

import {WA_MOBILE_REGEXP} from '../utils/constants';

export const WA_IS_MOBILE = new InjectionToken<boolean>('', {
    factory: () => WA_MOBILE_REGEXP.test(inject(WA_USER_AGENT)),
});
