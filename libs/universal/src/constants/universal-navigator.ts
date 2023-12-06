import {FactoryProvider, Optional} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';

import {SSR_USER_AGENT} from '../tokens/ssr-user-agent';
import {EVENT_TARGET} from '../utils/event-target';
import {
    alwaysFalse,
    alwaysRejected,
    alwaysZero,
    emptyArray,
    emptyFunction,
    emptyObject,
} from '../utils/functions';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getArray<T>() {
    return new (class extends Array<T> {
        item = (): null => null;
        namedItem = (): null => null;
        refresh(): void {}
    })();
}

export const NAVIGATOR_MOCK: Navigator = {
    appCodeName: ``,
    appName: ``,
    appVersion: ``,
    platform: ``,
    product: ``,
    productSub: ``,
    userAgent: ``,
    vendor: ``,
    vendorSub: ``,
    onLine: false,
    confirmSiteSpecificTrackingException: alwaysFalse,
    confirmWebWideTrackingException: alwaysFalse,
    share: alwaysRejected,
    registerProtocolHandler: emptyFunction,
    unregisterProtocolHandler: emptyFunction,
    removeSiteSpecificTrackingException: emptyFunction,
    removeWebWideTrackingException: emptyFunction,
    storeSiteSpecificTrackingException: emptyFunction,
    storeWebWideTrackingException: emptyFunction,
    credentials: {
        create: alwaysRejected,
        get: alwaysRejected,
        preventSilentAccess: alwaysRejected,
        store: alwaysRejected,
    },
    msSaveBlob: alwaysFalse,
    msSaveOrOpenBlob: alwaysFalse,
    sendBeacon: alwaysFalse,
    hardwareConcurrency: 0,
    getDisplayMedia: alwaysRejected,
    language: ``,
    languages: [],
    storage: {
        estimate: alwaysRejected,
        persist: alwaysRejected,
        persisted: alwaysRejected,
    },
    activeVRDisplays: [],
    authentication: {
        getAssertion: alwaysRejected,
        makeCredential: alwaysRejected,
    },
    clipboard: {
        ...EVENT_TARGET,
        readText: alwaysRejected,
        writeText: alwaysRejected,
    },
    cookieEnabled: false,
    doNotTrack: null,
    gamepadInputEmulation: `keyboard`,
    geolocation: {
        clearWatch: emptyFunction,
        getCurrentPosition: emptyFunction,
        watchPosition: alwaysZero,
    },
    maxTouchPoints: 0,
    mediaDevices: {
        ...EVENT_TARGET,
        ondevicechange: null,
        enumerateDevices: alwaysRejected,
        getSupportedConstraints: emptyObject,
        getUserMedia: alwaysRejected,
    },
    mimeTypes: getArray<MimeType>(),
    msManipulationViewsEnabled: false,
    msMaxTouchPoints: 0,
    msPointerEnabled: false,
    permissions: {
        query: alwaysRejected,
    },
    plugins: getArray<Plugin>(),
    pointerEnabled: false,
    serviceWorker: {
        ...EVENT_TARGET,
        controller: null,
        oncontrollerchange: null,
        onmessage: null,
        onmessageerror: null,
        ready: alwaysRejected(),
        getRegistration: alwaysRejected,
        getRegistrations: alwaysRejected,
        register: alwaysRejected,
        startMessages: emptyFunction,
    },
    webdriver: false,
    getGamepads: emptyArray,
    getUserMedia: emptyFunction,
    getVRDisplays: alwaysRejected,
    javaEnabled: alwaysFalse,
    msLaunchUri: emptyFunction,
    requestMediaKeySystemAccess: alwaysRejected,
    vibrate: alwaysFalse,
} as unknown as Navigator;

export const UNIVERSAL_NAVIGATOR: FactoryProvider = {
    provide: NAVIGATOR,
    deps: [[new Optional(), SSR_USER_AGENT]],
    useFactory: (userAgent: string | null): Navigator => ({
        ...NAVIGATOR_MOCK,
        userAgent: userAgent || ``,
    }),
};
