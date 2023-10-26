# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/resize-observer/logo.svg) Resize Observer API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/resize-observer.svg)](https://npmjs.com/package/@ng-web-apis/resize-observer)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/resize-observer)](https://bundlephobia.com/result?p=@ng-web-apis/resize-observer)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=resize-observer)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/resize-observer)

This is a library for declarative use of
[Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/taiga-family/ng-web-apis/tree/main/libs/common):

```bash
npm i @ng-web-apis/common
```

Now install the package:

```bash
npm i @ng-web-apis/resize-observer
```

## Usage

1. Import `ResizeObserverModule` to the module where you plan to use it.
2. Use `waResizeObserver` directive to observe an element:

```html
<section>
  <h1
    waResizeBox="content-box"
    (waResizeObserver)="onResize($event)"
  >
    I'm being observed
  </h1>
</section>
```

Use `waResizeBox` to configure
[ResizeObserver options](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe)

**NOTE:** Keep in mind these are used one time in constructor so you cannot use binding, only strings.

## Service

Alternatively you can use `Observable`-based `ResizeObserverService` and provide token `RESIZE_OPTION_BOX` manually:

```ts
@Component({
  selector: 'my-component',
  providers: [
    ResizeObserverService,
    {
      provide: RESIZE_OPTION_BOX,
      useValue: 'border-box',
    },
  ],
})
export class MyComponent {
  constructor(@Inject(ResizeObserverService) entries$: ResizeObserverService) {
    entries$.subscribe(entries => {
      // This will trigger when the component resizes
      // Don't forget to unsubscribe
      console.log(entries);
    });
  }
}
```

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 79+                                                                                                                                                                                                    | 69+                                                                                                                                                                                                        | 64+                                                                                                                                                                                                     | 13.1+                                                                                                                                                                                                   | 13.4+                                                                                                                                                                                                               |

> You can use [polyfill](https://www.npmjs.com/package/resize-observer-polyfill) to support older browsers

## Demo

You can [try online demo here](https://taiga-family.github.io/ng-web-apis/resize-observer)

## See also

Other [Web APIs for Angular](https://taiga-family.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/taiga-family/ng-web-apis)
