import {filter, MonoTypeOperatorFunction} from 'rxjs';

export function filterByKey(target: string): MonoTypeOperatorFunction<StorageEvent> {
    return filter(({key}) => key === null || key === target);
}
