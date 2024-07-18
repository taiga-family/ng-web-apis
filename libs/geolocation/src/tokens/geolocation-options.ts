import {InjectionToken} from '@angular/core';

export const WA_POSITION_OPTIONS = new InjectionToken<PositionOptions>(
    '[WA_POSITION_OPTIONS]',
    {factory: () => ({})},
);

/**
 * @deprecated: drop in v5.0, use {@link WA_POSITION_OPTIONS}
 */
export const POSITION_OPTIONS = WA_POSITION_OPTIONS;
