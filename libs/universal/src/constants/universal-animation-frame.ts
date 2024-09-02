import type {ValueProvider} from '@angular/core';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {NEVER} from 'rxjs';

export const UNIVERSAL_ANIMATION_FRAME: ValueProvider = {
    provide: WA_ANIMATION_FRAME,
    useValue: NEVER,
};
