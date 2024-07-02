import {InjectionToken} from '@angular/core';

export const WA_CANVAS_2D_CONTEXT = new InjectionToken<CanvasRenderingContext2D>(
    '[WA_CANVAS_2D_CONTEXT]: Canvas 2D rendering context',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_CANVAS_2D_CONTEXT}
 */
export const CANVAS_2D_CONTEXT = WA_CANVAS_2D_CONTEXT;
