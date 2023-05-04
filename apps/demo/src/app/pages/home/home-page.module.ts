import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [HomePageComponent],
    imports: [RouterModule.forChild([{path: '', component: HomePageComponent}])],
})
export class HomePageModule {}
