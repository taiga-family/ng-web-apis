# ![ng-web-apis logo](https://raw.githubusercontent.com/Tinkoff/ng-web-apis/main/libs/intersection-observer/logo.svg) Intersection Observer API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/intersection-observer.svg)](https://npmjs.com/package/@ng-web-apis/intersection-observer)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/intersection-observer)](https://bundlephobia.com/result?p=@ng-web-apis/intersection-observer)

This is a library for declarative use of
[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/tinkoff/ng-web-apis/tree/main/libs/common):

```bash
npm i @ng-web-apis/common
```

Now install the package:

```bash
npm i @ng-web-apis/intersection-observer
```

## Usage

1. Import `IntersectionObserverModule` for directives to work
2. Create [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) with
   `waIntersectionObserver` directive
3. Observe elements with `waIntersectionObservee` directive
4. _Optional:_ provide root element with `waIntersectionRoot` directive and use `waIntersectionThreshold` and
   `waIntersectionRootMargin` attributes to configure
   [IntersectionObserver options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

   > **NOTE:** Keep in mind these are used one time in constructor so you cannot use binding, only strings. Pass comma
   > separated numbers to set an array of thresholds.

### Usage with Jest

DOM environment provided by Jest does not emulate IntersectionObserver API and need to be mocked. You can add the
following line to your `setup.ts`:

```ts
// setup.ts
import '@ng-web-apis/universal/mocks';
```

to use mocks from [@ng-web-apis/universal](https://github.com/tinkoff/ng-web-apis/tree/main/libs/universal#mocks)
package.

## Examples

Observing multiple elements intersecting with viewport using single observer

```html
<section waIntersectionObserver waIntersectionThreshold="0.5">
  <div (waIntersectionObservee)="onIntersection($event)">I'm being observed</div>
  <div (waIntersectionObservee)="onIntersection($event)">I'm being observed</div>
</section>
```

Observing elements intersecting with parent element, each having different configuration therefore using individual
observers:

```html
<section waIntersectionRoot>
  <div waIntersectionObserver waIntersectionThreshold="0.5" (waIntersectionObservee)="onIntersection($event)">
    I'm being observed
  </div>
  <div waIntersectionObserver waIntersectionThreshold="1,0.5,0" (waIntersectionObservee)="onIntersection($event)">
    I'm being observed
  </div>
</section>
```

## Services

Alternatively you can use `Observable`-based services:

1. `IntersectionObserveeService` can be used to observe elements under `waIntersectionObserver` directive in the DI tree

2. `IntersectionObserverService` can be used to observe single element independently. Provide tokens manually to
   configure it:

```ts
@Component({
  selector: 'my-component',
  providers: [
    IntersectionObserverService,
    {
      provide: INTERSECTION_THRESHOLD,
      useValue: 0.5,
    },
    {
      provide: INTERSECTION_ROOT_MARGIN,
      useValue: '10px',
    },
  ],
})
export class MyComponent {
  constructor(@Inject(IntersectionObserverService) entries$: IntersectionObserverService) {
    entries$.subscribe(entries => {
      // Don't forget to unsubscribe
      console.log(entries);
    });
  }
}
```

> In this case provide `INTERSECTION_ROOT` up the DI tree if you want to observe intersection with a particular parent
> element

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                15+                                                                                                |                                                                                                  55+                                                                                                  |                                                                                                51+                                                                                                 |                                                                                               12.2+                                                                                                |

> You can use [polyfill](https://www.npmjs.com/package/intersection-observer) to support older browsers

## Angular Universal

If you want to use this package with SSR, you need to mock `IntersectionObserver` class on the server. You can use our
Universal package for this, see [this example](https://github.com/tinkoff/ng-web-apis/tree/main/libs/universal#mocks).

## Demo

You can [try online demo here](https://tinkoff.github.io/ng-web-apis/intersection-observer)

## See also

Other [Web APIs for Angular](https://tinkoff.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/tinkoff/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work? Check out this
[Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter) we’ve created
for our projects. It got you covered on continuous integration, pre-commit checks, linting, versioning + changelog, code
coverage and all that jazz.
