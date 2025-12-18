# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/geolocation/logo.svg) Geolocation API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/geolocation.svg)](https://npmjs.com/package/@ng-web-apis/geolocation)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/geolocation)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=geolocation)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/geolocation)

This is an `Observable` based abstraction over
[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to use with Angular

## Install

If you do not have [@ng-web-apis/common](https://github.com/taiga-family/ng-web-apis/tree/main/libs/common):

```bash
npm i @ng-web-apis/common
```

Now install the package:

```bash
npm i @ng-web-apis/geolocation
```

## How to use

### WaGeolocationService

`WaGeolocationService` is an `Observable`, that emits
[Position](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition) object

Import service in your component:

```ts
export class Example {
  private readonly geolocation$ = inject(WaGeolocationService);
}
```

Now, to observe user position, you can subscribe to `geolocation$`:

```ts
this.geolocation$.subscribe((position) => doSomethingWithPosition(position));
```

If you need to get position just once and stop observing user location, you can subscribe to `geolocation$` and use
`take(1)` RxJS operator:

```ts
geolocation$.pipe(take(1)).subscribe((position) => doSomethingWithPosition(position));
```

Or you can use async pipe to get position directly in template:

```html
@if (geolocation$ | async; as position) { {{position.coords.latitude}} }
```

Service is cold, meaning if there are no active subscriptions, it doesn't track position.

## Tokens

The library also provides some tokens to simplify working with
[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API):

- `WA_GEOLOCATION_SUPPORT` returns `true` if user's browser supports
  [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

```ts
export class Example {
  private readonly geolocationSupport = inject(WA_GEOLOCATION_SUPPORT);
}
```

- You can provide [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) through
  `WA_POSITION_OPTIONS` token with optional properties named `enableHighAccuracy`, `timeout` and `maximumAge`. It uses
  `{}` by default.

```ts
bootstrapApplication(App, {
  providers: [
    {
      provide: WA_POSITION_OPTIONS,
      useValue: {enableHighAccuracy: true, timeout: 3000, maximumAge: 1000},
    },
  ],
});
```

- [navigator.geolocation](https://developer.mozilla.org/ru/docs/Web/API/Navigator/geolocation) can be injected through
  `WA_GEOLOCATION` token.

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9+                                                                                                                                                                                                     | 3.5+                                                                                                                                                                                                       | 5+                                                                                                                                                                                                      | 5+                                                                                                                                                                                                      | 3.2+                                                                                                                                                                                                                |

## Demo

You can [try online demo here](https://taiga-family.github.io/ng-web-apis/geolocation)

## See also

Other [Web APIs for Angular](https://taiga-family.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/taiga-family/ng-web-apis)
