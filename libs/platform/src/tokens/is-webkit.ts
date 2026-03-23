import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

export const WA_IS_WEBKIT = new InjectionToken(ngDevMode ? '[WA_IS_WEBKIT]' : '', {
    factory: () => !!inject<any>(WA_WINDOW)?.webkitConvertPointFromNodeToPage,
});
