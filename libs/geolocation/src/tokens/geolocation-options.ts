import {InjectionToken} from '@angular/core';

export const POSITION_OPTIONS = new InjectionToken<PositionOptions>(
    `[POSITION_OPTIONS]: Token for an additional position options`,
    {factory: () => ({})},
);
