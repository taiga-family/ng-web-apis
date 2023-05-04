import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoPath} from '@demo/constants';

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
        path: DemoPath.UniversalPage,
        loadChildren: async () =>
            (await import(`../pages/universal/universal-page.module`))
                .UniversalPageModule,
    },
    {
        path: DemoPath.AudioPage,
        loadChildren: async () =>
            (await import(`../pages/audio/audio-page.module`)).AudioPageModule,
    },
    {
        path: DemoPath.CanvasPage,
        loadChildren: async () =>
            (await import(`../pages/canvas/canvas-page.module`)).CanvasPageModule,
    },
    {
        path: DemoPath.ResizeObserverPage,
        loadChildren: async () =>
            (await import(`../pages/resize-observer/resize-observer-page.module`))
                .ResizeObserverPageModule,
    },
    {
        path: '',
        redirectTo: DemoPath.HomePage,
        pathMatch: 'full',
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: DemoPath.HomePage,
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
