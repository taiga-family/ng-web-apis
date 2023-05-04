import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';

export const PERMISSIONS = new InjectionToken<Permissions>(
    'An abstraction over window.navigator.permissions object',
    {
        factory: () => inject(NAVIGATOR).permissions,
    },
);
