import {InjectionToken} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';

export const CANVAS_PROPERTIES = new InjectionToken<CanvasMethod[]>(
    'A directive performing processing before and after drawing to canvas',
    {
        factory: () => [],
    },
);
