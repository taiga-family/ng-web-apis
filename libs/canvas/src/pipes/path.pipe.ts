import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'path',
})
export class PathPipe implements PipeTransform {
    public transform(path: string): Path2D {
        return new Path2D(path);
    }
}
