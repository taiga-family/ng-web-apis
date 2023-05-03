import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {UniversalModule} from '@ng-web-apis/universal';

import {AppBrowserModule} from './app.browser.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [AppBrowserModule, ServerModule, UniversalModule],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
