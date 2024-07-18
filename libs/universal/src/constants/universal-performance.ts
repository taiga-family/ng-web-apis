import type {Performance} from 'node:perf_hooks';

import type {FactoryProvider} from '@angular/core';
import {PERFORMANCE} from '@ng-web-apis/common';

export const UNIVERSAL_PERFORMANCE: FactoryProvider = {
    provide: PERFORMANCE,
    deps: [],
    useFactory(): globalThis.Performance | Performance {
        return (
            safeRequire<{performance: Performance}>('node:perf_hooks')?.performance ||
            safeRequire<{performance: Performance}>('perf_hooks')?.performance ||
            globalThis.performance
        );
    },
};

function safeRequire<T>(modulePath: string): T | undefined {
    try {
        return require(modulePath);
    } catch (e) {
        return undefined;
    }
}
