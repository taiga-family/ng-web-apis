import {InjectionToken} from '@angular/core';

export const POSITION_OPTIONS = new InjectionToken<PositionOptions>(
    'Token for an additional position options',
    {factory: () => ({})},
);
