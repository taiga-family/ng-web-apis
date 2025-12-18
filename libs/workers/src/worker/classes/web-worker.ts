import {EMPTY, fromEvent, merge, Observable, Subject, take, takeUntil, tap} from 'rxjs';

import {WORKER_BLANK_FN} from '../consts/worker-fn-template';
import {type TypedMessageEvent} from '../types/typed-message-event';
import {type WorkerFunction} from '../types/worker-function';

export class WaWebWorker<T = any, R = any> extends Observable<TypedMessageEvent<R>> {
    private readonly worker: Worker | undefined;
    private readonly url: string;
    private readonly destroy$: Subject<void>;

    constructor(url: string, options?: WorkerOptions) {
        let worker: Worker | undefined;
        let error: any;

        try {
            worker = new Worker(url, options);
        } catch (e) {
            error = e;
        }

        super((subscriber) => {
            let eventStream$: Observable<ErrorEvent | TypedMessageEvent<R>> = EMPTY;

            if (error) {
                subscriber.error(error);
            } else if (this.destroy$.isStopped) {
                subscriber.complete();
            } else if (worker) {
                eventStream$ = merge(
                    fromEvent<TypedMessageEvent<R>>(worker, 'message').pipe(
                        tap((event) => subscriber.next(event)),
                    ),
                    fromEvent<ErrorEvent>(worker, 'error').pipe(
                        tap((event) => subscriber.error(event)),
                    ),
                ).pipe(takeUntil(this.destroy$));
            }

            eventStream$.subscribe().add(subscriber);
        });

        this.worker = worker;
        this.url = url;
        this.destroy$ = new Subject<void>();
    }

    public static fromFunction<T, R>(
        fn: WorkerFunction<T, R>,
        options?: WorkerOptions,
    ): WaWebWorker<T, R> {
        return new WaWebWorker<T, R>(WaWebWorker.createFnUrl(fn), options);
    }

    public static async execute<T, R>(
        fn: WorkerFunction<T, R>,
        data: T,
    ): Promise<TypedMessageEvent<R>> {
        const worker = WaWebWorker.fromFunction(fn);
        // eslint-disable-next-line rxjs/no-topromise
        const promise = worker.pipe(take(1)).toPromise();

        worker.postMessage(data);

        return promise.then((result) => {
            worker.terminate();

            return result as unknown as TypedMessageEvent<R>;
        });
    }

    private static createFnUrl(fn: WorkerFunction): string {
        const script = `(${WORKER_BLANK_FN})(${fn});`;

        const blob = new Blob([script], {type: 'text/javascript'});

        return URL.createObjectURL(blob);
    }

    public terminate(): void {
        if (this.destroy$.isStopped) {
            return;
        }

        if (this.worker) {
            this.worker.terminate();
        }

        URL.revokeObjectURL(this.url);

        this.destroy$.next();
        this.destroy$.complete();
    }

    public postMessage(value: T): void {
        if (this.worker) {
            this.worker.postMessage(value);
        }
    }
}
