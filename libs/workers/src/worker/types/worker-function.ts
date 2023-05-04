export type WorkerFunction<T = any, R = any> = (data: T) => R | Promise<R>;
