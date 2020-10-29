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
-   `ANIMATION_FRAME` — shared Observable based on `window.requestAnimationFrame`
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

-   It is easy to understand: you see all dependencies of your entity in its constructor
-   It is easy to test: you can just mock any of your dependencies to test
-   It is easy to reuse: your components and directives can be used in any context if it has dependencies that they need to be created

## See also

Other [Web APIs for Angular](https://ng-web-apis.github.io/) by [@ng-web-apis](https://github.com/ng-web-apis)
