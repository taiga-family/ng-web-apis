import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

import {TypedMessageEvent} from '../types/typed-message-event';

export function toData<T>(): OperatorFunction<TypedMessageEvent<T>, T> {
    return map<TypedMessageEvent<T>, T>(({data}) => data);
}
