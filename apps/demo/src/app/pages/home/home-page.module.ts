import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomePageComponent} from './home-page.component';

@NgModule({
    imports: [RouterModule.forChild([{path: ``, component: HomePageComponent}])],
    declarations: [HomePageComponent],
})
export class HomePageModule {}
