import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

export function toValue(): OperatorFunction<StorageEvent, string | null> {
    return map(({newValue}) => newValue);
}
