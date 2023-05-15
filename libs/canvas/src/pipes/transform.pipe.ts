import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'transform',
})
export class TransformPipe implements PipeTransform {
    transform(value: string): DOMMatrix {
        return new DOMMatrix(value);
    }
}
