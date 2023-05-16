import {ExistingProvider, InjectionToken, Type} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';

export const CANVAS_METHOD = new InjectionToken<CanvasMethod>(
    'A directive that draws on canvas',
);

export function asCanvasMethod(useExisting: Type<CanvasMethod>): ExistingProvider {
    return {
        provide: CANVAS_METHOD,
        useExisting,
    };
}
