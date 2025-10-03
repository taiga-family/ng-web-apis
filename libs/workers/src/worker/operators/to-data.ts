import {map, type OperatorFunction} from 'rxjs';

import {type TypedMessageEvent} from '../types/typed-message-event';

export function toData<T>(): OperatorFunction<TypedMessageEvent<T>, T> {
    return map<TypedMessageEvent<T>, T>(({data}) => data);
}
