import {InjectionToken} from '@angular/core';

export const WA_POSITION_OPTIONS = new InjectionToken<PositionOptions>(
    ngDevMode ? '[WA_POSITION_OPTIONS]' : '',
    {factory: () => ({})},
);
