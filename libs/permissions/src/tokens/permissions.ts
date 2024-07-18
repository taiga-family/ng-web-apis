import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';

export const WA_PERMISSIONS = new InjectionToken<Permissions>('[WA_PERMISSIONS]', {
    factory: () => inject(NAVIGATOR).permissions,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_PERMISSIONS}
 */
export const PERMISSIONS = WA_PERMISSIONS;
