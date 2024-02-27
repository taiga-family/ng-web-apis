import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {toData, WebWorker, WorkerPipe} from '@ng-web-apis/workers';
import {TuiButtonModule, TuiNotificationModule} from '@taiga-ui/core';
import {map, Subject} from 'rxjs';

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
        WorkerPipe,
        TuiButtonModule,
        TuiNotificationModule,
        ClockComponent,
    ],
    templateUrl: './workers-page.component.html',
    styleUrls: ['./workers-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WorkersPageComponent {
    protected readonly platformId = inject(PLATFORM_ID);
    protected readonly isBrowser = isPlatformBrowser(this.platformId);
    protected readonly workerThread = WebWorker.fromFunction<void, number>(startCompute);
    protected readonly workerData$ = this.workerThread.pipe(toData());
    protected readonly emitter = new Subject<void>();
    protected readonly result$ = this.emitter.pipe(map(startCompute));
}
