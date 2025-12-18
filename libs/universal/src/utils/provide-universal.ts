import {type EnvironmentProviders, type Provider} from '@angular/core';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

export function provideUniversal(): Array<EnvironmentProviders | Provider> {
    return UNIVERSAL_PROVIDERS;
}
