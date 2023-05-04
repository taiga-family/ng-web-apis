import {ChangeDetectionStrategy, Component, Inject, PLATFORM_ID} from '@angular/core';
import {toData, WebWorker} from '@ng-web-apis/workers';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';

function startCompute(): number {
    const start = performance.now();

    Array.from({length: 16000}).forEach((_, index) =>
        Array.from({length: index}).reduce<number>((sum: number) => sum + 1, 0),
    );

    return performance.now() - start;
}

@Component({
    selector: `workers-page`,
    templateUrl: `./workers-page.component.html`,
    styleUrls: [`./workers-page.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkersPageComponent {
    readonly isBrowser = isPlatformBrowser(this.platformId);
    readonly workerThread = WebWorker.fromFunction<void, number>(startCompute);
    readonly workerData$ = this.workerThread.pipe(toData());
    readonly emitter: Subject<void> = new Subject();
    readonly result$ = this.emitter.pipe(map(startCompute));

    constructor(@Inject(PLATFORM_ID) readonly platformId: Record<any, any>) {}
}
