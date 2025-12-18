import {ChangeDetectionStrategy, Component, contentChildren} from '@angular/core';

import {WA_CANVAS_METHOD} from '../tokens/canvas-method';

@Component({
    selector: 'canvas-clip-path',
    template: '<ng-content />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaCanvasClipPath {
    public readonly pathSteps = contentChildren(WA_CANVAS_METHOD);
}
