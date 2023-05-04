import {NgModule} from '@angular/core';
import {CanvasPageComponent} from './canvas-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CanvasModule} from '@ng-web-apis/canvas';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CanvasModule,
        RouterModule.forChild([{path: '', component: CanvasPageComponent}]),
    ],
    declarations: [CanvasPageComponent],
})
export class CanvasPageModule {}
