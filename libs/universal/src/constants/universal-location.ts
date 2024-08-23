import { WA_LOCATION } from "@ng-web-apis/common";
import type {FactoryProvider} from '@angular/core';
import {Optional} from '@angular/core';
import {LocationMock} from '../classes/location-mock';
import {SSR_LOCATION} from '../tokens/ssr-location';

export const UNIVERSAL_LOCATION: FactoryProvider = {
    provide: WA_LOCATION,
    deps: [[new Optional(), SSR_LOCATION]],
    useFactory: (location: Location | null) => location || new LocationMock(),
};
