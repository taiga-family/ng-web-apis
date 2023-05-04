import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoPath} from '@demo/constants';

export const appRoutes: Routes = [
    {
        path: DemoPath.HomePage,
        loadChildren: async () =>
            (await import(`./pages/home/home-page.module`)).HomePageModule,
    },
    {
        path: DemoPath.CommonPage,
        loadChildren: async () =>
            (await import(`./pages/common/common-page.module`)).CommonPageModule,
    },
    {
        path: DemoPath.UniversalPage,
        loadChildren: async () =>
            (await import(`./pages/universal/universal-page.module`)).UniversalPageModule,
    },
    {
        path: DemoPath.AudioPage,
        loadChildren: async () =>
            (await import(`./pages/audio/audio-page.module`)).AudioPageModule,
    },
    {
        path: DemoPath.CanvasPage,
        loadChildren: async () =>
            (await import(`./pages/canvas/canvas-page.module`)).CanvasPageModule,
    },
    {
        path: DemoPath.ResizeObserverPage,
        loadChildren: async () =>
            (await import(`./pages/resize-observer/resize-observer-page.module`))
                .ResizeObserverPageModule,
    },
    {
        path: DemoPath.GeolocationPage,
        loadChildren: async () =>
            (await import(`./pages/geolocation/geolocation-page.module`))
                .GeolocationPageModule,
    },
    {
        path: DemoPath.IntersectionObserverPage,
        loadChildren: async () =>
            (
                await import(
                    `./pages/intersection-observer/intersection-observer-page.module`
                )
            ).IntersectionObserverPageModule,
    },
    {
        path: DemoPath.MutationObserverPage,
        loadChildren: async () =>
            (await import(`./pages/mutation-observer/mutation-observer-page.module`))
                .MutationObserverPageModule,
    },
    {
        path: DemoPath.PaymentRequestPage,
        loadChildren: async () =>
            (await import(`./pages/payment-request/payment-request-page.module`))
                .PaymentRequestPageModule,
    },
    {
        path: DemoPath.PermissionsPage,
        loadChildren: async () =>
            (await import(`./pages/permissions/permissions-page.module`))
                .PermissionsPageModule,
    },
    {
        path: DemoPath.MidiPage,
        loadChildren: async () =>
            (await import(`./pages/midi/midi-page.module`)).MidiPageModule,
    },
    {
        path: DemoPath.SpeechPage,
        loadChildren: async () =>
            (await import(`./pages/speech/speech-page.module`)).SpeechPageModule,
    },
    {
        path: DemoPath.StoragePage,
        loadChildren: async () =>
            (await import(`./pages/storage/storage-page.module`)).StoragePageModule,
    },
    {
        path: DemoPath.WorkersPage,
        loadChildren: async () =>
            (await import(`./pages/workers/workers-page.module`)).WorkersPageModule,
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
