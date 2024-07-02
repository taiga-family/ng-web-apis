# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/notification/logo.svg) Notification API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/notification.svg)](https://npmjs.com/package/@ng-web-apis/notification)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/notification)](https://bundlephobia.com/result?p=@ng-web-apis/notification)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=notification)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/notification)

This is a library for declarative use of
[Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) with Angular.

## Install

```bash
npm i @ng-web-apis/notification
```

## Usage

1. Import the `NotificationService` into your Angular component or service where you want to use it.

```ts
import {NotificationService} from '@ng-web-apis/notification';
```

2. Inject the `NotificationService` into your component's constructor or with `inject` (Angular 14+).

```ts
// in constructor
constructor(private notificationAPIService: NotificationService) {}

// via inject
notificationAPIService = inject(NotificationService);
```

3. Use the `requestPermission` and `open` methods to request permission and open a notification.

```ts
this.notificationAPIService
  .requestPermission()
  .pipe(
    filter((permission) => permission === 'granted'),
    switchMap(() =>
      this.notificationAPIService.open('Hello world!', {
        body: 'This is a notification',
        requireInteraction: true,
      }),
    ),
  )
  .subscribe();
```

## Demo

You can [try online demo here](https://taiga-family.github.io/ng-web-apis/notification)

## See also

Other [Web APIs for Angular](https://taiga-family.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/taiga-family/ng-web-apis)
