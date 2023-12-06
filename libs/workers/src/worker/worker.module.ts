import {NgModule} from '@angular/core';

import {WorkerPipe} from './pipes/worker.pipe';

@NgModule({
    declarations: [WorkerPipe],
    exports: [WorkerPipe],
})
export class WorkerModule {}
