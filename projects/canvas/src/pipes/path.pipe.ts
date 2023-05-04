import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'path',
})
export class PathPipe implements PipeTransform {
    transform(path: string): Path2D {
        return new Path2D(path);
    }
}
