import {NgModule} from '@angular/core';
import {FrequencyPipe} from './frequency.pipe';

@NgModule({
    declarations: [FrequencyPipe],
    exports: [FrequencyPipe],
})
export class FrequencyPipeModule {}
