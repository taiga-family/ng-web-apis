import {inject, InjectionToken} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';

export const WA_PERMISSIONS = new InjectionToken<Permissions>(
    ngDevMode ? '[WA_PERMISSIONS]' : '',
    {
        factory: () => inject(WA_NAVIGATOR).permissions,
    },
);
