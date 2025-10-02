import {map, type OperatorFunction} from 'rxjs';

export function toValue(): OperatorFunction<StorageEvent, string | null> {
    return map(({newValue}) => newValue);
}
