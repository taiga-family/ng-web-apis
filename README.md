# ![logo](logo.svg) Common utils for Web APIs

> Part of <img src="web-api.svg" align="top"> [Web APIs for Angular](https://ng-web-apis.github.io/)

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/common.svg)](https://npmjs.com/package/@ng-web-apis/common)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/common)](https://bundlephobia.com/result?p=@ng-web-apis/common)
[![Travis (.org)](https://img.shields.io/travis/ng-web-apis/common)](https://travis-ci.org/ng-web-apis/common)
[![Coveralls github](https://img.shields.io/coveralls/github/ng-web-apis/common)](https://coveralls.io/github/ng-web-apis/common?branch=master)

A set of common utils for consuming Web APIs with Angular

## Tokens

-   `WINDOW` — provides access to global `window` object
-   `NAVIGATOR` — provides access to `window.navigator` object
-   `NETWORK_INFORMATION` — provides access to `window.navigator.connection` object
-   `USER_AGENT` — provides access to `window.navigator.userAgent` string
-   `PERFORMANCE` — provides access to `window.performance` object
-   `ANIMATION_FRAME` — shared `Observable` based on `window.requestAnimationFrame`
-   `CACHES` — provides access to `window.caches` object
-   `CSS` — provides access to `window.CSS` object or mock object if it's not available (i.e. in IE)
-   `LOCATION` — provides access to `window.location` object
-   `LOCAL_STORAGE` — provides access to `window.localStorage` object
-   `SESSION_STORAGE` — provides access to `window.sessionStorage` object
-   `SPEECH_RECOGNITION` — provides access to `SpeechRecognition` class or returns `null` if browser does not support it
-   `SPEECH_SYNTHESIS` — provides access to `window.speechSynthesis` object
-   `PAGE_VISIBILITY` — wrapper for `document.addEventListener('visibilityChange')` api

## How to use

Just inject a token you need. You can also take a look at [Stackblitz sample](https://stackblitz.com/edit/ng-web-apis)

## What advantages do we get from abstract entities in our app?

👨‍🎓   **It is easy to understand:** you see all dependencies of your entity in its constructor

🧞   **It is easy to test:** you can just mock any of your dependencies to test

🧩  **It is easy to reuse**:** your components and directives can be used in any context if it has dependencies that they need to be created

♻️   **It is environment agnostic:** you can start your app in SSR or other environments (see also [@ng-web-apis/universal](https://github.com/ng-web-apis/universal))

## See also

Other [Web APIs for Angular](https://ng-web-apis.github.io/) by [@ng-web-apis](https://github.com/ng-web-apis)

## Core team

<table>
    <tr>
       <td align="center">
            <a href="https://twitter.com/waterplea"
                ><img
                    src="https://github.com/waterplea.png?size=100"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Alex Inkin"
                /><br /><sub><b>Alex Inkin</b></sub></a
            >
            <div style="margin-top: 4px">
                <a
                    style="margin-left: 8px"
                    href="https://twitter.com/waterplea"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://image.flaticon.com/icons/svg/733/733579.svg"
                /></a>
                <a href="https://github.com/waterplea" title="Github"
                    ><img
                        width="16"
                        src="https://image.flaticon.com/icons/svg/2111/2111425.svg"
                /></a>
                <a
                    style="margin-left: 8px"
                    href="https://t.me/waterplea"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://image.flaticon.com/icons/svg/2111/2111644.svg"
                /></a>
            </div>
        </td>
        <td align="center">
            <a href="http://marsibarsi.me"
                ><img
                    src="https://github.com/marsibarsi.png?size=100"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Roman Sedov"
                /><br /><sub><b>Roman Sedov</b></sub></a
            >
            <div style="margin-top: 4px">
                <a
                    style="margin-left: 8px"
                    href="https://twitter.com/marsibarsi"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://image.flaticon.com/icons/svg/733/733579.svg"
                /></a>
                <a href="https://github.com/marsibarsi" title="Github"
                    ><img
                        width="16"
                        src="https://image.flaticon.com/icons/svg/2111/2111425.svg"
                /></a>
                <a
                    style="margin-left: 8px"
                    href="https://t.me/marsibarsi"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://image.flaticon.com/icons/svg/2111/2111644.svg"
                /></a>
            </div>
        </td>
    </tr>
</table>
