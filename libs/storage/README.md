# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/storage/logo.svg) Web Storage API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/storage.svg)](https://npmjs.com/package/@ng-web-apis/storage)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/storage)](https://bundlephobia.com/result?p=@ng-web-apis/storage)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=storage)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/storage)

This is a library to use [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) with
Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/taiga-family/ng-web-apis/tree/main/libs/common):

```bash
npm i @ng-web-apis/common
```

Now install the package:

```bash
npm i @ng-web-apis/storage
```

## How to use

Web Storage API consists of storage synthesis and storage recognition.

1. Use `STORAGE_EVENT` token to inject an `Observable` of
   [`StorageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent).
2. Use `filterByKey` and `toValue` utility operators to work with this `Observable`.
3. Native `StorageEvent` only fires when changes are made from another tab. To capture events from the same tab use
   `StorageService` to work with `localStorage`

See [demo](https://taiga-family.github.io/ng-web-apis/storage) for concrete usage example.

## See also

Other [Web APIs for Angular](https://taiga-family.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/taiga-family/ng-web-apis)
