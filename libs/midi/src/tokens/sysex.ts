import {InjectionToken} from '@angular/core';

export const WA_SYSEX = new InjectionToken<boolean>('[WA_SYSEX]', {factory: () => false});
