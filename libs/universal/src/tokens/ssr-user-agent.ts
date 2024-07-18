import {InjectionToken} from '@angular/core';

export const WA_SSR_USER_AGENT = new InjectionToken<string>('[WA_SSR_USER_AGENT]');

/**
 * @deprecated: drop in v5.0, use {@link WA_SSR_USER_AGENT}
 */
export const SSR_USER_AGENT = WA_SSR_USER_AGENT;
