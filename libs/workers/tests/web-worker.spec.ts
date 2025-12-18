import {type TypedMessageEvent, WaWebWorker} from '@ng-web-apis/workers';
import {Observable, take} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('WaWebWorker', () => {
    // it is needed to ignore web worker errors
    window.onerror = () => {};

    it('should fail if a worker is not available', async () => {
        const worker1 = Worker;

        delete (globalThis as any).Worker;

        const worker = WaWebWorker.fromFunction<void, void>((d) => d);

        expect(() => worker.terminate()).not.toThrow();
        expect(() => worker.postMessage()).not.toThrow();

        await expectAsync(worker.toPromise()).toBeRejected();

        (globalThis as any).Worker = worker1;
    });

    it('should create worker from a function', () => {
        const worker = WaWebWorker.fromFunction((d) => d);

        expect(worker instanceof WaWebWorker).toBe(true);
        expect((worker as any).worker instanceof Worker).toBe(true);
    });

    it('should trigger an error if URL was not found', async () => {
        const worker = new WaWebWorker('some/wrong/url');

        await expectAsync(worker.toPromise()).toBeRejected();
    });

    it('should resolve the last value before completing', async () => {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        const worker = WaWebWorker.fromFunction((data: string) => Promise.resolve(data));

        const promise = worker
            .pipe(
                (source) =>
                    new Observable((subscriber) => {
                        source.subscribe({
                            next({data}: TypedMessageEvent<string>) {
                                (source as WaWebWorker).terminate();
                                subscriber.next(data);
                                subscriber.complete();
                            },
                        });
                    }),
            )
            .toPromise();

        worker.postMessage('a');
        worker.postMessage('b');

        expect(await promise).toBe('a');
    });

    it('should run a worker and return a correct data', async () => {
        const workerPromise: Promise<TypedMessageEvent<string>> = WaWebWorker.execute<
            string,
            string
            // eslint-disable-next-line @typescript-eslint/promise-function-async
        >((data) => Promise.resolve().then(() => data), 'some data');

        expect((await workerPromise).data).toBe('some data');
    }, 10000);

    it('should create worker', async () => {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        const thread = WaWebWorker.fromFunction<string, string>((data) =>
            Promise.resolve(data),
        );

        const workerPromise = thread.pipe(take(1)).toPromise();

        thread.postMessage('some data');

        expect((await workerPromise)?.data).toBe('some data');
    }, 10000);

    it('should fail if an inner promise is rejected', async () => {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        const worker = WaWebWorker.fromFunction<void, string>(() =>
            Promise.reject('reason'),
        );

        worker.postMessage();

        expect(
            await worker.toPromise().catch((err: unknown) => (err as Error).message),
        ).toBe('Uncaught reason');
    });

    it('should close all subscriptions, if the worker was terminated', () => {
        const worker = WaWebWorker.fromFunction<void, string>(() => 'some data');

        const subscriptions = [
            worker.subscribe(),
            worker.subscribe(),
            worker.subscribe(),
        ];

        worker.terminate();

        expect(subscriptions.map((s) => s.closed)).toEqual([true, true, true]);
    });

    it("shouldn't throw any errors, if the worker was terminated twice", async () => {
        const worker = WaWebWorker.fromFunction<void, string>(() => 'some data');

        worker.terminate();
        worker.terminate();

        expect(await worker.toPromise()).toBeUndefined();
    });
});
