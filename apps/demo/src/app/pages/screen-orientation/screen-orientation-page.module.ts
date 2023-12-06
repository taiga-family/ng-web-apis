import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HighlightModule} from 'ngx-highlightjs';

import {ScreenOrientationPageComponent} from './screen-orientation-page.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        RouterModule.forChild([{path: ``, component: ScreenOrientationPageComponent}]),
    ],
    declarations: [ScreenOrientationPageComponent],
})
export class ScreenOrientationPageModule {}
