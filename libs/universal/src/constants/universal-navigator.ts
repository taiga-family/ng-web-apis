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

function getArray<T>() {
    return new (class extends Array<T> {
        item = () => null;
        namedItem = () => null;
        refresh() {}
    })();
}

/** For older version of TS and Angular that do not support all properties from Navigator */
interface NavigatorLike extends Navigator {
    [key: string]: any;
}

export const NAVIGATOR_MOCK: NavigatorLike = {
    appCodeName: '',
    appName: '',
    appVersion: '',
    platform: '',
    product: '',
    productSub: '',
    userAgent: '',
    vendor: '',
    vendorSub: '',

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

    language: '',
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
    gamepadInputEmulation: 'keyboard',
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
};

export function navigatorFactory(userAgent: string | null): NavigatorLike {
    return {
        ...NAVIGATOR_MOCK,
        userAgent: userAgent || '',
    };
}

export const UNIVERSAL_NAVIGATOR: FactoryProvider = {
    provide: NAVIGATOR,
    deps: [[new Optional(), SSR_USER_AGENT]],
    useFactory: navigatorFactory,
};
