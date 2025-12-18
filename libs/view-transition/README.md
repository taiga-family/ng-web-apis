# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/view-transition/logo.svg) View Transition API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/view-transition.svg)](https://npmjs.com/package/@ng-web-apis/view-transition)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/view-transition)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=view-transition)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/view-transition)

This service is an abstraction over
[view transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) for Angular

## Install

```bash
npm i @ng-web-apis/view-transition
```

## How to use

1. Import the `WaViewTransitionService` into your Angular component or service where you want to use it.

```ts
import {WaViewTransitionService} from '@ng-web-apis/view-transition';
```

2. Inject the `WaViewTransitionService` into your component's constructor or with `inject` (Angular 14+).

```ts
// in constructor
constructor(private viewTransitionService: WaViewTransitionService) {}

// via inject
viewTransitionService = inject(WaViewTransitionService);
```

3. Use the `startViewTransition` method to initiate a view transition. This method takes a callback function that
   returns a `Promise<void>` or `void`. You can perform any necessary DOM changing logic within this callback.

```ts
startTransition() {
  this.viewTransitionService.startViewTransition(() => {
    // Your DOM changing logic goes here
    return this.animateTransition();
  }).subscribe({
    next: (transition) => {
      // Callback is done and transition is about to begin
      console.log('View transition is about to begin:', transition);
    },
    complete: () => {
      console.log('View transition completed');
    },
    error: (error) => {
      // Handle any errors that occur during the transition
      console.error('View transition error:', error);
    },
  });
}
```

## Demo

You can [try online demo here](https://taiga-family.github.io/ng-web-apis/view-transition)

## See also

Other [Web APIs for Angular](https://taiga-family.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/taiga-family/ng-web-apis)
