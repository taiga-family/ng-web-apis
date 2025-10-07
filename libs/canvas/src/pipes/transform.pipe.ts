import {isPlatformBrowser} from '@angular/common';
import {inject, Pipe, type PipeTransform, PLATFORM_ID} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'transform',
})
export class WaCanvasTransformPipe implements PipeTransform {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    public transform(value: string): DOMMatrix | null {
        return this.isBrowser ? new DOMMatrix(value) : null;
    }
}

/**
 * @deprecated: use {@link WaCanvasTransformPipe}
 */
export const TransformPipe = WaCanvasTransformPipe;
