# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/screen-orientation/logo.svg) Screen Orientation API for Angular

## Install

```bash
npm i @ng-web-apis/screen-orientation
```

## Examples

```ts
import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';

// ...
export class Example {
  constructor(readonly orientation$: ScreenOrientationService) {}
}
```

```html
<p>{{ orientation$ | async }}</p>
```
