import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, PLATFORM_ID} from '@angular/core';
import {toData, WebWorker, WorkerModule} from '@ng-web-apis/workers';
import {TuiButtonModule, TuiNotificationModule} from '@taiga-ui/core';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import {ClockComponent} from './clock.component';

function startCompute(): number {
    const start = performance.now();

    Array.from({length: 16000}).forEach((_, index) =>
        Array.from({length: index}).reduce<number>((sum: number) => sum + 1, 0),
    );

    return performance.now() - start;
}

@Component({
    standalone: true,
    selector: 'workers-page',
    imports: [
        CommonModule,
        WorkerModule,
        TuiButtonModule,
        TuiNotificationModule,
        ClockComponent,
    ],
    templateUrl: './workers-page.component.html',
    styleUrls: ['./workers-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WorkersPageComponent {
    readonly isBrowser = isPlatformBrowser(this.platformId);
    readonly workerThread = WebWorker.fromFunction<void, number>(startCompute);
    readonly workerData$ = this.workerThread.pipe(toData());
    readonly emitter = new Subject<void>();
    readonly result$ = this.emitter.pipe(map(startCompute));

    constructor(@Inject(PLATFORM_ID) readonly platformId: Record<any, any>) {}
}
