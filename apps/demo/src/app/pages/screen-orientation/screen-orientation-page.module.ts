import {NgModule} from '@angular/core';
import {ScreenOrientationPageComponent} from './screen-orientation-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        RouterModule.forChild([{path: '', component: ScreenOrientationPageComponent}]),
    ],
    declarations: [ScreenOrientationPageComponent],
})
export class ScreenOrientationPageModule {}
