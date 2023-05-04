export interface TypedMessageEvent<T> extends MessageEvent {
    data: T;
}
