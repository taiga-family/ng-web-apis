import {ExistingProvider, InjectionToken, Type} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';

export const CANVAS_PROPERTIES = new InjectionToken<CanvasMethod[]>(
    `[CANVAS_PROPERTIES]: A directive performing processing before and after drawing to canvas`,
    {
        factory: () => [],
    },
);

export function asCanvasProperty(useExisting: Type<CanvasMethod>): ExistingProvider {
    return {
        provide: CANVAS_PROPERTIES,
        multi: true,
        useExisting,
    };
}
