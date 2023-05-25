import {NgModule, SecurityContext} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {TuiLinkModule, TuiRootModule, TuiSvgModule} from '@taiga-ui/core';
import {MarkdownModule} from 'ngx-markdown';
import {POSITION_OPTIONS} from '@ng-web-apis/geolocation';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'demo',
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
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {fullLibraryLoader: () => import('highlight.js')},
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
})
export class AppBrowserModule {}
