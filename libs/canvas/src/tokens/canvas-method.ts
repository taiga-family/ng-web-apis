import type {ExistingProvider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';

import type {CanvasMethod} from '../interfaces/canvas-method';

export const WA_CANVAS_METHOD = new InjectionToken<CanvasMethod>('[WA_CANVAS_METHOD]');

export function asCanvasMethod(useExisting: Type<CanvasMethod>): ExistingProvider {
    return {
        provide: WA_CANVAS_METHOD,
        useExisting,
    };
}

/**
 * @deprecated: drop in v5.0, use {@link WA_CANVAS_METHOD}
 */
export const CANVAS_METHOD = WA_CANVAS_METHOD;
