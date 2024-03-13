import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'transform',
})
export class TransformPipe implements PipeTransform {
    public transform(value: string): DOMMatrix {
        return new DOMMatrix(value);
    }
}
