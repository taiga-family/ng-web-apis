import {
    type ApplicationRef,
    importProvidersFrom,
    mergeApplicationConfig,
} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideServerRendering, ServerModule} from '@angular/platform-server';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {App} from './app/app.component';
import {config} from './app/app.config';

const serverConfig = mergeApplicationConfig(config, {
    providers: [
        importProvidersFrom(ServerModule),
        provideServerRendering(),
        UNIVERSAL_PROVIDERS,
    ],
});

export default async (): Promise<ApplicationRef> =>
    bootstrapApplication(App, serverConfig);
