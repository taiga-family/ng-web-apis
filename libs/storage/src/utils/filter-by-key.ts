import {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';

export function filterByKey(target: string): MonoTypeOperatorFunction<StorageEvent> {
    return filter(({key}) => key === null || key === target);
}
