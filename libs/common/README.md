# ![logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/common/logo.svg) Common utils for Web APIs

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/common.svg)](https://npmjs.com/package/@ng-web-apis/common)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/common)](https://bundlephobia.com/result?p=@ng-web-apis/common)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=common)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/common)

A set of common utils for consuming Web APIs with Angular

## Tokens

- `WA_WINDOW` — provides access to global `window` object
- `WA_NAVIGATOR` — provides access to `window.navigator` object
- `WA_NETWORK_INFORMATION` — provides access to `window.navigator.connection` object
- `WA_USER_AGENT` — provides access to `window.navigator.userAgent` string
- `WA_MEDIA_DEVICES` — provides access to `window.navigator.mediaDevices` object
- `WA_PERFORMANCE` — provides access to `window.performance` object
- `WA_ANIMATION_FRAME` — shared `Observable` based on `window.requestAnimationFrame`
- `WA_CACHES` — provides access to `window.caches` object
- `WA_CSS` — provides access to `window.CSS` object or mock object if it's not available (i.e. in IE)
- `WA_CRYPTO` — provides access to `window.crypto` object
- `WA_LOCATION` — provides access to `window.location` object
- `WA_LOCAL_STORAGE` — provides access to `window.localStorage` object
- `WA_SCREEN` — provides access to `window.screen` object
- `WA_SESSION_STORAGE` — provides access to `window.sessionStorage` object
- `WA_SPEECH_RECOGNITION` — provides access to `SpeechRecognition` class or returns `null` if browser does not support
  it
- `WA_SPEECH_SYNTHESIS` — provides access to `window.speechSynthesis` object
- `WA_PAGE_VISIBILITY` — wrapper for `document.addEventListener('visibilityChange')` api
- `WA_HISTORY` — provides access to `window.history` object
