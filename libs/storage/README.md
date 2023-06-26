# ![ng-web-apis logo](https://raw.githubusercontent.com/Tinkoff/ng-web-apis/main/libs/storage/logo.svg) Web Storage API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/storage.svg)](https://npmjs.com/package/@ng-web-apis/storage)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/storage)](https://bundlephobia.com/result?p=@ng-web-apis/storage)
[![Coveralls github](https://img.shields.io/coveralls/github/ng-web-apis/storage)](https://coveralls.io/github/ng-web-apis/storage?branch=master)

This is a library to use [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) with
Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/tinkoff/ng-web-apis/tree/main/libs/common):

```
npm i @ng-web-apis/common
```

Now install the package:

```
npm i @ng-web-apis/storage
```

## How to use

Web Storage API consists of storage synthesis and storage recognition.

1. Use `STORAGE_EVENT` token to inject an `Observable` of
   [`StorageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent).
2. Use `filterByKey` and `toValue` utility operators to work with this `Observable`.
3. Native `StorageEvent` only fires when changes are made from another tab. To capture events from the same tab use
   `StorageService` to work with `localStorage`

See [demo](https://tinkoff.github.io/ng-web-apis/storage) for concrete usage example.

## See also

Other [Web APIs for Angular](https://tinkoff.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/tinkoff/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work? Check out this
[Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter) we’ve created
for our projects. It got you covered on continuous integration, pre-commit checks, linting, versioning + changelog, code
coverage and all that jazz.
