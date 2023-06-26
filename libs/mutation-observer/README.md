# ![ng-web-apis logo](https://raw.githubusercontent.com/Tinkoff/ng-web-apis/main/libs/mutation-observer/logo.svg) Mutation Observer API for Angular

> Part of <img src="projects/demo/src/assets/web-api.svg" align="top"> >
> [Web APIs for Angular](https://tinkoff.github.io/ng-web-apis/)

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/mutation-observer.svg)](https://npmjs.com/package/@ng-web-apis/mutation-observer)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/mutation-observer)](https://bundlephobia.com/result?p=@ng-web-apis/mutation-observer)
[![Travis (.com)](https://img.shields.io/travis/com/ng-web-apis/mutation-observer)](https://travis-ci.com/ng-web-apis/mutation-observer)
[![Coveralls github](https://img.shields.io/coveralls/github/ng-web-apis/mutation-observer)](https://coveralls.io/github/ng-web-apis/mutation-observer?branch=master)
[![angular-open-source-starter](https://img.shields.io/badge/made%20with-angular--open--source--starter-d81676?logo=angular)](https://github.com/TinkoffCreditSystems/angular-open-source-starter)

This is a library for declarative use of
[Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/tinkoff/ng-web-apis/tree/main/libs/common):

```bash
npm i @ng-web-apis/common
```

Now install the package:

```bash
npm i @ng-web-apis/mutation-observer
```

## Usage

Add `MutationObserverModule` and then use `(waMutationObserver)="onMutation($event)"` directive to watch mutation in an
element.

Alternatively use an `Observable`-based `MutationObserverService` manually to get `MutationObserver` in an RxJS
`Observable` form.

## Configuring

Use attributes on an element to define
[MutationObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit) config object. All
attributes are `boolean` meaning no need to explicitly set them to `true`.

> **NOTE:** Keep in mind these are used one time in constructor so you cannot use binding, only strings. Pass comma
> separated attribute names to set `attributeFilter` array.

## Example

```html
<div
  subtree
  childList
  characterData
  attributeFilter="title, aria-label"
  [title]="title"
  [attr.aria-label]="label"
  (waMutationObserver)="onMutation($event)"
>
  ...
</div>
```

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                11+                                                                                                |                                                                                                  14+                                                                                                  |                                                                                                26+                                                                                                 |                                                                                                 7+                                                                                                 |

## Angular Universal

If you want to use this package with SSR, you need to mock `MutationObserver` class on the server. You can use our
Universal package for this, see [this example](https://github.com/tinkoff/ng-web-apis/tree/main/libs/universal#mocks).

## Demo

You can [try online demo here](https://tinkoff.github.io/ng-web-apis/mutation-observer)

## See also

Other [Web APIs for Angular](https://tinkoff.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/tinkoff/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work? Check out this
[Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter) we’ve created
for our projects. It got you covered on continuous integration, pre-commit checks, linting, versioning + changelog, code
coverage and all that jazz.
