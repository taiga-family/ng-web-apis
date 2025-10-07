import '@ng-web-apis/audio/polyfill';

import {type ApplicationRef, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {provideServerRendering} from '@angular/platform-server';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {App} from './app/app.component';
import {config} from './app/app.config';

const serverConfig = mergeApplicationConfig(config, {
    providers: [provideServerRendering(), provideNoopAnimations(), UNIVERSAL_PROVIDERS],
});

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
    bootstrapApplication(App, serverConfig, context);
