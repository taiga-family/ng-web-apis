import {WaCanvas2d} from './contexts/canvas-2d';
import {WaCanvasClipPath} from './methods/clip-path';
import {WaCanvasDrawImage} from './methods/draw-image';
import {WaCanvasPath} from './methods/path';
import {WaCanvasPath2d} from './methods/path-2d';
import {WaCanvasText} from './methods/text';
import {WaCanvasArc} from './path/arc';
import {WaCanvasArcTo} from './path/arc-to';
import {WaCanvasBezierCurveTo} from './path/bezier-curve-to';
import {WaCanvasEllipse} from './path/ellipse';
import {WaCanvasLineTo} from './path/line-to';
import {WaCanvasMoveTo} from './path/move-to';
import {WaCanvasQuadraticCurveTo} from './path/quadratic-curve-to';
import {WaCanvasRect} from './path/rect';
import {WaCanvasGradientPipe} from './pipes/gradient.pipe';
import {WaCanvasPathPipe} from './pipes/path.pipe';
import {WaCanvasPatternPipe} from './pipes/pattern.pipe';
import {WaCanvasRadPipe} from './pipes/rad.pipe';
import {WaCanvasTransformPipe} from './pipes/transform.pipe';
import {WaCanvasClip} from './properties/clip';
import {WaCanvasCompositing} from './properties/compositing';
import {WaCanvasFillStrokeStyles} from './properties/fill-stroke-styles';
import {WaCanvasFilter} from './properties/filter';
import {WaCanvasImageSmoothing} from './properties/image-smoothing';
import {WaCanvasPathDrawingStyles} from './properties/path-drawing-styles';
import {WaCanvasShadowStyles} from './properties/shadow-styles';
import {WaCanvasTextDrawingStyles} from './properties/text-drawing-styles';
import {WaCanvasTransform} from './properties/transform';

export const WaCanvas = [
    WaCanvas2d,
    WaCanvasClipPath,
    WaCanvasDrawImage,
    WaCanvasPath,
    WaCanvasPath2d,
    WaCanvasText,
    WaCanvasArc,
    WaCanvasArcTo,
    WaCanvasBezierCurveTo,
    WaCanvasEllipse,
    WaCanvasLineTo,
    WaCanvasMoveTo,
    WaCanvasQuadraticCurveTo,
    WaCanvasRect,
    WaCanvasClip,
    WaCanvasCompositing,
    WaCanvasFillStrokeStyles,
    WaCanvasFilter,
    WaCanvasImageSmoothing,
    WaCanvasPathDrawingStyles,
    WaCanvasShadowStyles,
    WaCanvasTextDrawingStyles,
    WaCanvasGradientPipe,
    WaCanvasPathPipe,
    WaCanvasPatternPipe,
    WaCanvasRadPipe,
    WaCanvasTransform,
    WaCanvasTransformPipe,
];

export const CanvasModule = WaCanvas;
