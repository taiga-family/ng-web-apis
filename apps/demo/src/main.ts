import {enableProdMode, NgModuleRef} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppBrowserModule} from './app/app.browser.module';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const bootstrap = async (): Promise<NgModuleRef<AppBrowserModule>> =>
    platformBrowserDynamic().bootstrapModule(AppBrowserModule);

document.addEventListener(`DOMContentLoaded`, () => {
    setTimeout(() => {
        bootstrap().catch(err => console.error(err));
    });
});
