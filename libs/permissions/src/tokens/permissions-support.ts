import {inject, InjectionToken} from '@angular/core';

import {PERMISSIONS} from './permissions';

export const WA_PERMISSIONS_SUPPORT = new InjectionToken<boolean>(
    '[WA_PERMISSIONS_SUPPORT]',
    {
        factory: () => !!inject(PERMISSIONS),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_PERMISSIONS_SUPPORT}
 */
export const PERMISSIONS_SUPPORT = WA_PERMISSIONS_SUPPORT;
