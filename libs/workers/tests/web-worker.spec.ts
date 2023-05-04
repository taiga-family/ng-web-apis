import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {TypedMessageEvent} from '../src/worker/types/typed-message-event';
import {WebWorker} from '../src/worker/classes/web-worker';

// it is needed to ignore web worker errors
window.onerror = () => {};

describe('WebWorker', () => {
    it('should fail if a worker is not available', async () => {
        const OriginalWorker = Worker;

        delete (window as any).Worker;

        const worker = WebWorker.fromFunction<void, void>(d => d);

        expect(() => worker.terminate()).not.toThrow();
        expect(() => worker.postMessage()).not.toThrow();

        await expectAsync(worker.toPromise()).toBeRejected();

        (window as any).Worker = OriginalWorker;
    });

    it('should create worker from a function', () => {
        const worker = WebWorker.fromFunction(d => d);

        expect(worker instanceof WebWorker).toEqual(true);
        expect((worker as any).worker instanceof Worker).toEqual(true);
    });

    it('should trigger an error if URL was not found', async () => {
        const worker = new WebWorker('some/wrong/url');

        await expectAsync(worker.toPromise()).toBeRejected();
    });

    it('should resolve the last value before completing', async () => {
        const worker = WebWorker.fromFunction((data: string) => Promise.resolve(data));

        const promise = worker
            .pipe(source => {
                return new Observable(subscriber => {
                    source.subscribe({
                        next({data}: TypedMessageEvent<string>) {
                            (source as WebWorker).terminate();
                            subscriber.next(data);
                            subscriber.complete();
                        },
                    });
                });
            })
            .toPromise();

        worker.postMessage('a');
        worker.postMessage('b');
        expect(await promise).toEqual('a');
    });

    it('should run a worker and return a correct data', async () => {
        const workerPromise: Promise<TypedMessageEvent<string>> = WebWorker.execute<
            string,
            string
        >(data => Promise.resolve().then(() => data), 'some data');

        expect((await workerPromise).data).toEqual('some data');
    }, 10000);

    it('should create worker', async () => {
        const thread = WebWorker.fromFunction<string, string>(data =>
            Promise.resolve(data),
        );

        const workerPromise = thread.pipe(take(1)).toPromise();

        thread.postMessage('some data');

        expect((await workerPromise)?.data).toEqual('some data');
    }, 10000);

    it('should fail if an inner promise is rejected', async () => {
        const worker = WebWorker.fromFunction<void, string>(() =>
            Promise.reject('reason'),
        );

        worker.postMessage();

        expect(await worker.toPromise().catch(err => err.message)).toEqual(
            'Uncaught reason',
        );
    });

    it('should close all subscriptions, if the worker was terminated', async () => {
        const worker = WebWorker.fromFunction<void, string>(() => 'some data');

        const subscriptions = [
            worker.subscribe(),
            worker.subscribe(),
            worker.subscribe(),
        ];

        worker.terminate();
        expect(subscriptions.map(s => s.closed)).toEqual([true, true, true]);
    });

    it("shouldn't throw any errors, if the worker was terminated twice", async () => {
        const worker = WebWorker.fromFunction<void, string>(() => 'some data');

        worker.terminate();
        worker.terminate();
        expect(await worker.toPromise()).toBeUndefined();
    });
});
