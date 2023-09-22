# ![logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/common/logo.svg) Common utils for Web APIs

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/common.svg)](https://npmjs.com/package/@ng-web-apis/common)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/common)](https://bundlephobia.com/result?p=@ng-web-apis/common)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=common)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/common)

A set of common utils for consuming Web APIs with Angular

## Tokens

- `WINDOW` — provides access to global `window` object
- `NAVIGATOR` — provides access to `window.navigator` object
- `NETWORK_INFORMATION` — provides access to `window.navigator.connection` object
- `USER_AGENT` — provides access to `window.navigator.userAgent` string
- `MEDIA_DEVICES` — provides access to `window.navigator.mediaDevices` object
- `PERFORMANCE` — provides access to `window.performance` object
- `ANIMATION_FRAME` — shared `Observable` based on `window.requestAnimationFrame`
- `CACHES` — provides access to `window.caches` object
- `CSS` — provides access to `window.CSS` object or mock object if it's not available (i.e. in IE)
- `CRYPTO` — provides access to `window.crypto` object
- `LOCATION` — provides access to `window.location` object
- `LOCAL_STORAGE` — provides access to `window.localStorage` object
- `SCREEN` — provides access to `window.screen` object
- `SESSION_STORAGE` — provides access to `window.sessionStorage` object
- `SPEECH_RECOGNITION` — provides access to `SpeechRecognition` class or returns `null` if browser does not support it
- `SPEECH_SYNTHESIS` — provides access to `window.speechSynthesis` object
- `PAGE_VISIBILITY` — wrapper for `document.addEventListener('visibilityChange')` api
- `HISTORY` — provides access to `window.history` object
