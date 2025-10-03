import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'path',
})
export class WaCanvasPathPipe implements PipeTransform {
    public transform(path: string): Path2D {
        return new Path2D(path);
    }
}

/**
 * @deprecated: use {@link WaCanvasPathPipe}
 */
export const PathPipe = WaCanvasPathPipe;
