import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {type ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {POSITION_OPTIONS} from '@ng-web-apis/geolocation';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {MarkdownModule} from 'ngx-markdown';

import {ROUTES} from './app.routes';

export const config: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        importProvidersFrom(MarkdownModule.forRoot()),
        provideRouter(
            ROUTES,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ),
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: async () => import('highlight.js'),
                lineNumbersLoader: async () => import('ngx-highlightjs/line-numbers'),
            },
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: POSITION_OPTIONS,
            useValue: {enableHighAccuracy: true, timeout: 3000, maximumAge: 1000},
        },
        NG_EVENT_PLUGINS,
    ],
};
