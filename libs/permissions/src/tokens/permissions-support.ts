import {inject, InjectionToken} from '@angular/core';
import {PERMISSIONS} from './permissions';

export const PERMISSIONS_SUPPORT = new InjectionToken<boolean>(
    'Is Permissions API supported?',
    {
        factory: () => {
            return !!inject(PERMISSIONS);
        },
    },
);
