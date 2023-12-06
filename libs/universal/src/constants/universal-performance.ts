import {FactoryProvider} from '@angular/core';
import {PERFORMANCE} from '@ng-web-apis/common';

export function performanceFactory(): Performance {
    return require(`perf_hooks`).performance;
}

export const UNIVERSAL_PERFORMANCE: FactoryProvider = {
    provide: PERFORMANCE,
    deps: [],
    useFactory: performanceFactory,
};
