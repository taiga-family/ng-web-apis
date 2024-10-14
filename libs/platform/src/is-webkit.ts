import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

export const WA_IS_WEBKIT = new InjectionToken('', {
    factory: () => !!inject<any>(WA_WINDOW)?.webkitConvertPointFromNodeToPage,
});
