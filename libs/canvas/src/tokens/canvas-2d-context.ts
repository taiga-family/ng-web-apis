import {InjectionToken} from '@angular/core';

export const WA_CANVAS_2D_CONTEXT = new InjectionToken<CanvasRenderingContext2D>(
    ngDevMode ? '[WA_CANVAS_2D_CONTEXT]' : '',
);
