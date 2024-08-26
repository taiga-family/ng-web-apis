import { WA_WINDOW } from "@ng-web-apis/common";
import {DOCUMENT} from '@angular/common';
import type {FactoryProvider} from '@angular/core';
import {Optional} from '@angular/core';
import {BlobMock} from '../classes/blob-mock';
import {LocationMock} from '../classes/location-mock';
import {StorageMock} from '../classes/storage-mock';
import {SSR_LOCATION} from '../tokens/ssr-location';
import {SSR_USER_AGENT} from '../tokens/ssr-user-agent';
import {EVENT_TARGET} from '../utils/event-target';
import {
    alwaysFalse,
    alwaysNull,
    alwaysRejected,
    alwaysZero,
    emptyFunction,
    identity,
} from '../utils/functions';
import {CACHES_MOCK} from './universal-caches';
import {CRYPTO_MOCK} from './universal-crypto';
import {NAVIGATOR_MOCK} from './universal-navigator';
import {performanceFactory} from './universal-performance';
import {SPEECH_SYNTHESIS_MOCK} from './universal-speech-synthesis';

const COMPUTED_STYLES: Partial<CSSStyleDeclaration> = {
    getPropertyPriority: () => '',
    getPropertyValue: () => '',
    item: () => '',
    removeProperty: () => '',
    setProperty: emptyFunction,
};
const COMPUTED_STYLES_HANDLER: ProxyHandler<CSSStyleDeclaration> = {
    get: (obj, key: any) => (key in obj ? obj[key] : null),
};
const COMPUTED_STYLES_PROXY = new Proxy<CSSStyleDeclaration>(
    COMPUTED_STYLES as any,
    COMPUTED_STYLES_HANDLER,
);
const CSS_RULES = new (class extends Array<CSSRule> implements CSSRuleList {
    public item = (): null => null;
})();
const BAR_PROP: BarProp = {
    visible: false,
};
const DB_REQUEST: IDBOpenDBRequest = {
    ...EVENT_TARGET,
    onblocked: null,
    onerror: null,
    onsuccess: null,
    onupgradeneeded: null,
    error: null,
    readyState: 'pending',
    result: null as any, // Cannot be accessed for 'pending' state anyway
    source: null as any, // null for open requests
    transaction: null,
};
const SELF = ['frames', 'parent', 'self', 'top', 'window'];
const WINDOW_HANDLER: ProxyHandler<Window> = {
    get: (windowRef, key: string) => {
        if (SELF.includes(key)) {
            return windowRef;
        }

        return key.startsWith('on') ? null : windowRef[key as keyof Window];
    },
};

export const UNIVERSAL_WINDOW: FactoryProvider = {
    provide: WA_WINDOW,
    deps: [DOCUMENT, [new Optional(), SSR_LOCATION], [new Optional(), SSR_USER_AGENT]],
    useFactory: (
        document: Document,
        location: Location | null,
        userAgent: string | null,
    ): Window => {
        const windowMock: Window = {
            ...EVENT_TARGET,
            document,
            localStorage: new StorageMock(),
            location: location ?? new LocationMock(),
            navigator: {...NAVIGATOR_MOCK, userAgent: userAgent ?? ''},
            performance: performanceFactory(),
            sessionStorage: new StorageMock(),
            speechSynthesis: SPEECH_SYNTHESIS_MOCK,
            caches: CACHES_MOCK,
            crypto: CRYPTO_MOCK,
            URL,
            URLSearchParams,
            setTimeout,
            setInterval,
            clearTimeout,
            clearInterval,
            console,
            Blob: BlobMock,
            alert: emptyFunction,
            clientInformation: {...NAVIGATOR_MOCK, userAgent: userAgent ?? ''},
            // TODO: Candidate for token
            matchMedia: () => ({
                ...EVENT_TARGET,
                matches: false,
                media: '',
                onchange: null,
                addListener: emptyFunction,
                removeListener: emptyFunction,
            }),
            // TODO: Candidate for token
            indexedDB: {
                cmp: alwaysZero,
                open: () => DB_REQUEST,
                deleteDatabase: () => DB_REQUEST,
            },
            customElements: {
                define: emptyFunction,
                get: emptyFunction,
                upgrade: emptyFunction,
                whenDefined: alwaysRejected,
            },
            styleMedia: {
                type: '',
                matchMedium: alwaysFalse,
            },
            history: {
                length: 0,
                scrollRestoration: 'auto',
                state: {},
                back: emptyFunction,
                forward: emptyFunction,
                go: emptyFunction,
                pushState: emptyFunction,
                replaceState: emptyFunction,
            },
            closed: false,
            defaultStatus: '',
            devicePixelRatio: 1,
            doNotTrack: '',
            frameElement: null,
            innerHeight: 0,
            innerWidth: 0,
            isSecureContext: false,
            length: 0,
            name: '',
            offscreenBuffering: false,
            opener: {},
            origin: '',
            orientation: '',
            outerHeight: 0,
            outerWidth: 0,
            pageXOffset: 0,
            pageYOffset: 0,
            screenLeft: 0,
            screenTop: 0,
            screenX: 0,
            screenY: 0,
            scrollX: 0,
            scrollY: 0,
            status: '',
            blur: emptyFunction,
            cancelAnimationFrame: emptyFunction,
            captureEvents: emptyFunction,
            close: emptyFunction,
            confirm: alwaysFalse,
            departFocus: emptyFunction,
            focus: emptyFunction,
            moveBy: emptyFunction,
            moveTo: emptyFunction,
            open: alwaysNull,
            postMessage: emptyFunction,
            print: emptyFunction,
            prompt: alwaysNull,
            releaseEvents: emptyFunction,
            requestAnimationFrame: alwaysZero,
            resizeBy: emptyFunction,
            resizeTo: emptyFunction,
            scroll: emptyFunction,
            scrollBy: emptyFunction,
            scrollTo: emptyFunction,
            stop: emptyFunction,
            atob: identity,
            btoa: identity,
            fetch: alwaysRejected,
            createImageBitmap: alwaysRejected,
            queueMicrotask: emptyFunction,
            locationbar: BAR_PROP,
            menubar: BAR_PROP,
            personalbar: BAR_PROP,
            scrollbars: BAR_PROP,
            statusbar: BAR_PROP,
            toolbar: BAR_PROP,
            getComputedStyle: () => COMPUTED_STYLES_PROXY,
            getMatchedCSSRules: () => CSS_RULES,
            getSelection: () => null,
        } as any;

        return new Proxy(windowMock, WINDOW_HANDLER);
    },
};
