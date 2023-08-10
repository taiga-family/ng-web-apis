# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/permissions/logo.svg) Permissions API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/permissions.svg)](https://npmjs.com/package/@ng-web-apis/permissions)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/permissions)](https://bundlephobia.com/result?p=@ng-web-apis/permissions)

This is a library to use [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) with
Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/taiga-family/ng-web-apis/tree/main/libs/common):

```bash
npm i @ng-web-apis/common
```

Now install the package:

```bash
npm i @ng-web-apis/permissions
```

## How to use

### PermissionsService

Import service in your component:

```ts
import { PermissionsService } from '@ng-web-apis/permissions';

...
constructor(private readonly permissions: PermissionsService) {}
```

Now, use the service to retrieve the
[state](https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus#Properties) of the permission in question.
Below is an example of checking the permission to use geolocation:

```ts
const geolocationStatus$ = this.permissions.state('geolocation');
geolocationStatus$.subscribe(geolocationStatus => doSomething(geolocationStatus));
```

Note, that a call to the `permissions.state()` returns an observable, which will emit new values in case the state for
the permission in question changes. If you need to get state just once and stop observing the permission, you can use
`take(1)` RxJs operator:

```ts
geolocationStatus$.pipe(take(1)).subscribe(geolocationStatus => doSomething(geolocationStatus));
```

The observable is cold, meaning if there are no active subscriptions, it doesn't track the status of the permission.

## Tokens

The library also provides a tokens to simplify working with
[Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API):

- `PERMISSIONS_SUPPORT` returns `true` if user's browser supports
  [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)

```ts
export class YourComponent {
  constructor(
    @Inject(PERMISSIONS_SUPPORT) private readonly permissionsSupport: boolean
  ) {}
    ...
```

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                79+                                                                                                |                                                                                                  46+                                                                                                  |                                                                                                43+                                                                                                 |                                                                                                16+                                                                                                 |

## See also

Other [Web APIs for Angular](https://taiga-family.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/taiga-family/ng-web-apis)
