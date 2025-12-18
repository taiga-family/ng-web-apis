import {inject, InjectionToken} from '@angular/core';

import {WA_PERMISSIONS} from './permissions';

export const WA_PERMISSIONS_SUPPORT = new InjectionToken<boolean>(
    '[WA_PERMISSIONS_SUPPORT]',
    {factory: () => !!inject(WA_PERMISSIONS)},
);
