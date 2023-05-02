import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DemoPath} from './demo-path';

export const appRoutes: Routes = [
    {
        path: DemoPath.HomePage,
        loadChildren: async () =>
            (await import(`../pages/home/home-page.module`)).HomePageModule,
    },
    {
        path: DemoPath.CommonPage,
        loadChildren: async () =>
            (await import(`../pages/common/common-page.module`)).CommonPageModule,
    },
    {
        path: '**',
        redirectTo: `/`,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
            relativeLinkResolution: 'corrected',
            scrollPositionRestoration: `enabled`,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
