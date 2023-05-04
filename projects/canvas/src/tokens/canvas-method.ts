import {InjectionToken} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';

export const CANVAS_METHOD = new InjectionToken<CanvasMethod>(
    'A directive that draws on canvas',
);
