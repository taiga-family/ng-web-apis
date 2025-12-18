import {inject, InjectionToken} from '@angular/core';
import {WA_NAVIGATOR, WA_WINDOW} from '@ng-web-apis/common';

/**
 * Detect if app is running under any of test frameworks
 */
export const WA_IS_E2E = new InjectionToken('', {
    factory: () => !!inject<any>(WA_WINDOW).Cypress || inject(WA_NAVIGATOR).webdriver,
});
