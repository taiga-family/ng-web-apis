import {ValueProvider} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {NEVER} from 'rxjs';

export const UNIVERSAL_ANIMATION_FRAME: ValueProvider = {
    provide: ANIMATION_FRAME,
    useValue: NEVER,
};
