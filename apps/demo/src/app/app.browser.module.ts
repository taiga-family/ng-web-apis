import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {
    TUI_ICONS_PATH,
    tuiIconsPathFactory,
    TuiLinkModule,
    TuiRootModule,
    TuiSvgModule,
} from '@taiga-ui/core';

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
            provide: TUI_ICONS_PATH,
            useValue: tuiIconsPathFactory('assets/taiga-ui/icons/'),
        },
    ],
})
export class AppBrowserModule {}
