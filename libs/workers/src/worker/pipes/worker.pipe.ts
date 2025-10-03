import {type OnDestroy, Pipe, type PipeTransform} from '@angular/core';
import {type Observable} from 'rxjs';

import {WebWorker} from '../classes/web-worker';
import {toData} from '../operators/to-data';
import {type WorkerFunction} from '../types/worker-function';

@Pipe({
    standalone: true,
    name: 'waWorker',
})
export class WorkerPipe implements PipeTransform, OnDestroy {
    private fn!: WorkerFunction;
    private worker!: WebWorker;
    private observer!: Observable<any>;

    public transform<T, R>(value: T, fn: WorkerFunction<T, R>): Observable<R> {
        if (this.fn !== fn) {
            this.terminateWorker();
            this.initNewWorker(fn);
        }

        this.worker.postMessage(value);

        return this.observer;
    }

    public ngOnDestroy(): void {
        this.terminateWorker();
    }

    private terminateWorker(): void {
        if (this.worker as WebWorker | undefined) {
            this.worker.terminate();
        }
    }

    private initNewWorker<T, R>(fn: WorkerFunction<T, R>): void {
        this.fn = fn;
        this.worker = WebWorker.fromFunction(fn);
        this.observer = this.worker.pipe(toData());
    }
}
