import {type ExistingProvider, InjectionToken, type Type} from '@angular/core';

import {type CanvasMethod} from '../interfaces/canvas-method';

export const WA_CANVAS_PROPERTIES = new InjectionToken<CanvasMethod[]>(
    '[WA_CANVAS_PROPERTIES]',
    {factory: () => []},
);

export function asCanvasProperty(useExisting: Type<CanvasMethod>): ExistingProvider {
    return {provide: WA_CANVAS_PROPERTIES, multi: true, useExisting};
}
