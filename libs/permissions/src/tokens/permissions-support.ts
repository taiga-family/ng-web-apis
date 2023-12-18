import {inject, InjectionToken} from '@angular/core';

import {PERMISSIONS} from './permissions';

export const PERMISSIONS_SUPPORT = new InjectionToken<boolean>(
    '[PERMISSIONS_SUPPORT]: Is Permissions API supported?',
    {
        factory: () => !!inject(PERMISSIONS),
    },
);
