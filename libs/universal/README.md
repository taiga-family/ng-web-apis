# ![logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/universal/logo.svg) Angular Universal fallbacks

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/universal.svg)](https://npmjs.com/package/@ng-web-apis/universal)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/universal)](https://bundlephobia.com/result?p=@ng-web-apis/universal)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=universal)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/universal)

A set of fallbacks to seamlessly use
[@ng-web-apis/common](https://github.com/taiga-family/ng-web-apis/tree/main/libs/common) in
[Angular Universal](https://github.com/angular/universal) apps. These packages have synced versions down to minor.

## How to use

Add constants imported from this package to providers of your `ServerAppModule`. Typically, you can also use these mocks
for tests. Idea of this package is — you shouldn't have to mock DOM on the server side or test `isPlatformBrowser` all
the time. Instead, you leverage Angular DI system to abstract from implementation. When possible, this package will
provide the same functionality on the server side as you have in browser. In other cases you will get type-safe mocks
and you can at least be sure you will not have `cannot read property of null` or `undefined is not a function` errors in
SSR.

## Tokens

You can provide universal providers in the following manner:

```ts
import {provideUniversal} from '@ng-web-apis/universal';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideUniversal(), // <-- add this
  ],
};

const config = mergeApplicationConfig(appConfig, serverConfig);
const bootstrap = () => bootstrapApplication(AppComponent, config);
```

## Special cases

When you use plain SSR without prerender you can retrieve some of the information from requests. Use the following
helpers to harvest that info:

**server.ts:**

```ts
import {provideLocation, provideUserAgent} from '@ng-web-apis/universal';

// ...

app.get('/**/*', (req: Request, res: Response) => {
  res.render('../dist/index', {
    req,
    res,
    providers: [provideLocation(req), provideUserAgent(req)],
  });
});
```

> ⚠️ **Note:** If you're using `AngularNodeAppEngine`, you **don't need** to manually call `provideLocation` or
> `provideUserAgent` — these tokens rely on the REQUEST token and are already properly provided by the engine.
