import {type Routes} from '@angular/router';
import {DemoPath} from '@demo/constants';

export const ROUTES: Routes = [
    {
        path: DemoPath.HomePage,
        loadComponent: async () => import('./pages/home/home-page.component'),
    },
    {
        path: DemoPath.CommonPage,
        loadComponent: async () => import('./pages/common/common-page.component'),
    },
    {
        path: DemoPath.PlatformPage,
        loadComponent: async () => import('./pages/platform'),
    },
    {
        path: DemoPath.ExperimentalPage,
        loadComponent: async () =>
            import('./pages/experimental/experimental-page.component'),
    },
    {
        path: DemoPath.UniversalPage,
        loadComponent: async () => import('./pages/universal/universal-page.component'),
    },
    {
        path: DemoPath.AudioPage,
        loadComponent: async () => import('./pages/audio/audio-page.component'),
    },
    {
        path: DemoPath.CanvasPage,
        loadComponent: async () => import('./pages/canvas/canvas-page.component'),
    },
    {
        path: DemoPath.ResizeObserverPage,
        loadComponent: async () =>
            import('./pages/resize-observer/resize-observer-page.component'),
    },
    {
        path: DemoPath.GeolocationPage,
        loadComponent: async () =>
            import('./pages/geolocation/geolocation-page.component'),
    },
    {
        path: DemoPath.ScreenOrientation,
        loadComponent: async () =>
            import('./pages/screen-orientation/screen-orientation-page.component'),
    },
    {
        path: DemoPath.IntersectionObserverPage,
        loadComponent: async () =>
            import('./pages/intersection-observer/intersection-observer-page.component'),
    },
    {
        path: DemoPath.MutationObserverPage,
        loadComponent: async () =>
            import('./pages/mutation-observer/mutation-observer-page.component'),
    },
    {
        path: DemoPath.PaymentRequestPage,
        loadComponent: async () =>
            import('./pages/payment-request/payment-request-page.component'),
    },
    {
        path: DemoPath.PermissionsPage,
        loadComponent: async () =>
            import('./pages/permissions/permissions-page.component'),
    },
    {
        path: DemoPath.MidiPage,
        loadComponent: async () => import('./pages/midi/midi-page.component'),
    },
    {
        path: DemoPath.SpeechPage,
        loadComponent: async () => import('./pages/speech/speech-page.component'),
    },
    {
        path: DemoPath.StoragePage,
        loadComponent: async () => import('./pages/storage/storage-page.component'),
    },
    {
        path: DemoPath.WorkersPage,
        loadComponent: async () => import('./pages/workers/workers-page.component'),
    },
    {
        path: DemoPath.ViewTransitionPage,
        loadComponent: async () =>
            import('./pages/view-transition/view-transition-page.component'),
    },
    {
        path: DemoPath.Notification,
        loadComponent: async () =>
            import('./pages/notification/notification-page.component'),
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
