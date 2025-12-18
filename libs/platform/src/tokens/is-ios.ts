import {inject, InjectionToken} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';

import {isIos} from '../utils/is-ios';

export const WA_IS_IOS = new InjectionToken<boolean>('', {
    factory: () => isIos(inject(WA_NAVIGATOR)),
});
