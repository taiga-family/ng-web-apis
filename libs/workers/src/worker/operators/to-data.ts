import {map, OperatorFunction} from 'rxjs';

import {TypedMessageEvent} from '../types/typed-message-event';

export function toData<T>(): OperatorFunction<TypedMessageEvent<T>, T> {
    return map<TypedMessageEvent<T>, T>(({data}) => data);
}
