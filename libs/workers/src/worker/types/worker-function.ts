export type WorkerFunction<T = any, R = any> = (data: T) => Promise<R> | R;
