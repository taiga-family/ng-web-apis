import {inject, InjectionToken} from '@angular/core';

import {WA_NAVIGATOR} from './navigator';

export const WA_USER_AGENT = new InjectionToken<string>('[WA_USER_AGENT]', {
    factory: () => inject(WA_NAVIGATOR).userAgent,
});
