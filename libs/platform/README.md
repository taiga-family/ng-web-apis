# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/platform/logo.svg) Platform

## Install

```bash
npm i @ng-web-apis/platform
```

## Tokens

- `WA_IS_MOBILE`
- `WA_IS_IOS`
- `WA_IS_ANDROID`
- `WA_IS_WEBKIT`

## Functions

- `waInjectElement<T = HTMLElement>()` — injects the host native element via `ElementRef`. Must be called in an
  injection context (constructor, field initializer, or `inject`-compatible factory).

```ts
import {waInjectElement} from '@ng-web-apis/platform';

@Directive({selector: '[myDirective]'})
export class MyDirective {
  private readonly element = waInjectElement<HTMLInputElement>();
}
```
