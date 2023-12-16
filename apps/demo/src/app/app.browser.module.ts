import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule, SecurityContext} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule, SwPush} from '@angular/service-worker';
import {POSITION_OPTIONS} from '@ng-web-apis/geolocation';
import {provideSwPush} from '@ng-web-apis/notification';
import {TuiLinkModule, TuiRootModule, TuiSvgModule} from '@taiga-ui/core';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {MarkdownModule} from 'ngx-markdown';

import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: `demo`,
        }),
        BrowserAnimationsModule,
        TuiRootModule,
        AppRoutingModule,
        HighlightModule,
        TuiLinkModule,
        TuiSvgModule,
        MarkdownModule.forRoot({
            sanitize: SecurityContext.NONE,
        }),
        ServiceWorkerModule.register(`ngsw-worker.js`, {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: `registerWhenStable:30000`,
        }),
    ],
    declarations: [AppComponent],
    providers: [
        provideSwPush(SwPush),
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {fullLibraryLoader: async () => import(`highlight.js`)},
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: POSITION_OPTIONS,
            useValue: {enableHighAccuracy: true, timeout: 3000, maximumAge: 1000},
        },
    ],
    bootstrap: [AppComponent],
})
export class AppBrowserModule {}
