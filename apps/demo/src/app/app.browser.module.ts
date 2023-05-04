import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';

@NgModule({
    imports: [
        AppRoutingModule,
        HighlightModule,
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({
            appId: 'demo',
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
    ],
})
export class AppBrowserModule {}
