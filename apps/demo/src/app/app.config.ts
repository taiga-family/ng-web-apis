import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {type ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {WA_POSITION_OPTIONS} from '@ng-web-apis/geolocation';
import {provideTaiga} from '@taiga-ui/core';
import {provideHighlightOptions} from 'ngx-highlightjs';
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
        provideHighlightOptions({
            coreLibraryLoader: async () => import('highlight.js/lib/core'),
            lineNumbersLoader: async () => import('ngx-highlightjs/line-numbers'),
            languages: {
                typescript: async () => import('highlight.js/lib/languages/typescript'),
                less: async () => import('highlight.js/lib/languages/less'),
                xml: async () => import('highlight.js/lib/languages/xml'),
                bash: async () => import('highlight.js/lib/languages/bash'),
            },
        }),
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: WA_POSITION_OPTIONS,
            useValue: {enableHighAccuracy: true, timeout: 3000, maximumAge: 1000},
        },
        provideTaiga(),
    ],
};
