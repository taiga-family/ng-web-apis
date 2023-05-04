/**
 * Public API Surface of @ng-web-apis/canvas
 */

/* Contexts */
export * from './contexts/canvas-2d';

/* Interfaces */
export * from './interfaces/canvas-method';

/* Methods */
export * from './methods/clip-path';
export * from './methods/draw-image';
export * from './methods/path';
export * from './methods/path-2d';
export * from './methods/text';

/* Path */
export * from './path/arc';
export * from './path/arc-to';
export * from './path/bezier-curve-to';
export * from './path/ellipse';
export * from './path/line-to';
export * from './path/rect';
export * from './path/move-to';
export * from './path/quadratic-curve-to';

/* Pipe */
export * from './pipes/gradient.pipe';
export * from './pipes/path.pipe';
export * from './pipes/pattern.pipe';
export * from './pipes/rad.pipe';

/* Properties */
export * from './properties/compositing';
export * from './properties/fill-stroke-styles';
export * from './properties/filter';
export * from './properties/clip';
export * from './properties/image-smoothing';
export * from './properties/path-drawing-styles';
export * from './properties/shadow-styles';
export * from './properties/text-drawing-styles';

/* Services */
export * from './services/draw.service';

/* Tokens */
export * from './tokens/canvas-2d-context';
export * from './tokens/canvas-method';
export * from './tokens/canvas-properties';

/* Types */
export * from './types/context-processor';

/* Modules */
export * from './module';
