import {type FactoryProvider} from '@angular/core';
import {WA_PERFORMANCE} from '@ng-web-apis/common';

export function performanceFactory(): Performance {
    return (
        safeRequire<{performance: Performance}>('node:perf_hooks')?.performance ||
        safeRequire<{performance: Performance}>('perf_hooks')?.performance ||
        globalThis.performance
    );
}

export const UNIVERSAL_PERFORMANCE: FactoryProvider = {
    provide: WA_PERFORMANCE,
    deps: [],
    useFactory: performanceFactory,
};

function safeRequire<T>(modulePath: string): T | undefined {
    try {
        return require(modulePath);
    } catch {
        return undefined;
    }
}
