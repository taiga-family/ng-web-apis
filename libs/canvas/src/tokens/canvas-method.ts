import {type ExistingProvider, InjectionToken, type Type} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';

export const WA_CANVAS_METHOD = new InjectionToken<CanvasMethod>('[WA_CANVAS_METHOD]');

export function asCanvasMethod(useExisting: Type<CanvasMethod>): ExistingProvider {
    return {provide: WA_CANVAS_METHOD, useExisting};
}
