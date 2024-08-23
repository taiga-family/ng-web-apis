import { WA_PERFORMANCE } from "@ng-web-apis/common";
import type {FactoryProvider} from '@angular/core';

export function performanceFactory(): Performance {
    return require('node:perf_hooks').performance;
}

export const UNIVERSAL_PERFORMANCE: FactoryProvider = {
    provide: WA_PERFORMANCE,
    deps: [],
    useFactory: performanceFactory,
};
