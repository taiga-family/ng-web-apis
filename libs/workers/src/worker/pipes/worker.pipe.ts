import {type OnDestroy, Pipe, type PipeTransform} from '@angular/core';
import {type Observable} from 'rxjs';

import {WaWebWorker} from '../classes/web-worker';
import {toData} from '../operators/to-data';
import {type WorkerFunction} from '../types/worker-function';

@Pipe({name: 'waWorker'})
export class WaWorkerPipe implements PipeTransform, OnDestroy {
    private fn!: WorkerFunction;
    private worker!: WaWebWorker;
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
        if (this.worker as WaWebWorker | undefined) {
            this.worker.terminate();
        }
    }

    private initNewWorker<T, R>(fn: WorkerFunction<T, R>): void {
        this.fn = fn;
        this.worker = WaWebWorker.fromFunction(fn);
        this.observer = this.worker.pipe(toData());
    }
}
