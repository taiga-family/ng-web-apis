import {take} from 'rxjs/operators';

import {WorkerPipe} from '../src/worker/pipes/worker.pipe';

describe(`WorkerPipe`, () => {
    let pipe: WorkerPipe;

    beforeEach(() => {
        pipe = new WorkerPipe();
    });

    it(`should emit the first value`, async () => {
        const result = await pipe
            .transform(`a`, data => data)
            .pipe(take(1))
            .toPromise();

        expect(result).toBe(`a`);
    });

    it(`should return the same worker for the same function`, () => {
        const workerFn = (data: unknown): unknown => data;

        const worker = pipe.transform(`a`, workerFn);
        const theSameWorker = pipe.transform(`a`, workerFn);

        expect(worker).toEqual(theSameWorker);
    });

    it(`should return a different worker for a different function`, () => {
        const worker = pipe.transform(`a`, (data: unknown) => data);
        const differentWorker = pipe.transform(`a`, (data: unknown) => data);

        expect(worker).not.toEqual(differentWorker);
    });

    it(`should terminate a previous worker`, async () => {
        const worker = pipe.transform(`a`, (data: unknown) => data);

        // eslint-disable-next-line rxjs/no-ignored-observable
        pipe.transform(`a`, (data: unknown) => data);
        await expectAsync(worker.toPromise()).toBeResolved();
    });

    it(`should terminate a worker then a pipe is destroyed`, async () => {
        const worker = pipe.transform(`a`, (data: unknown) => data);

        pipe.ngOnDestroy();
        await expectAsync(worker.toPromise()).toBeResolved();
    });
});
