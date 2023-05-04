import {take} from 'rxjs/operators';
import {WorkerPipe} from '../src/worker/pipes/worker.pipe';

describe('WorkerPipe', () => {
    let pipe: WorkerPipe;

    beforeEach(() => {
        pipe = new WorkerPipe();
    });

    it('should emit the first value', async () => {
        const result = await pipe
            .transform('a', data => data)
            .pipe(take(1))
            .toPromise();

        expect(await result).toEqual('a');
    });

    it('should return the same worker for the same function', async () => {
        const workerFn = (data: unknown) => data;

        const worker = await pipe.transform('a', workerFn);
        const theSameWorker = await pipe.transform('a', workerFn);

        expect(worker).toEqual(theSameWorker);
    });

    it('should return a different worker for a different function', async () => {
        const worker = await pipe.transform('a', (data: unknown) => data);
        const differentWorker = await pipe.transform('a', (data: unknown) => data);

        expect(worker).not.toEqual(differentWorker);
    });

    it('should terminate a previous worker', async () => {
        const worker = await pipe.transform('a', (data: unknown) => data);

        await pipe.transform('a', (data: unknown) => data);
        await expectAsync(worker.toPromise()).toBeResolved();
    });

    it('should terminate a worker then a pipe is destroyed', async () => {
        const worker = await pipe.transform('a', (data: unknown) => data);

        pipe.ngOnDestroy();
        await expectAsync(worker.toPromise()).toBeResolved();
    });
});
