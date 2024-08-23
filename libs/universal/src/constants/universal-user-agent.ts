import { WA_USER_AGENT } from "@ng-web-apis/common";
import type {FactoryProvider} from '@angular/core';
import {Optional} from '@angular/core';
import {SSR_USER_AGENT} from '../tokens/ssr-user-agent';

export const UNIVERSAL_USER_AGENT: FactoryProvider = {
    provide: WA_USER_AGENT,
    deps: [[new Optional(), SSR_USER_AGENT]],
    useFactory: (userAgent: string | null) => userAgent ?? '',
};
