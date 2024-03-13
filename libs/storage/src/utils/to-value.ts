import type {OperatorFunction} from 'rxjs';
import {map} from 'rxjs';

export function toValue(): OperatorFunction<StorageEvent, string | null> {
    return map(({newValue}) => newValue);
}
