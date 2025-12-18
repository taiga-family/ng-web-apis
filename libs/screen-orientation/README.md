# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/screen-orientation/logo.svg) Screen Orientation API for Angular

## Install

```bash
npm i @ng-web-apis/screen-orientation
```

## Examples

```ts
import {inject} from '@angular/core';
import {WaScreenOrientationService} from '@ng-web-apis/screen-orientation';

// ...
export class Example {
  protected readonly orientation$ = inject(WaScreenOrientationService);
}
```

```html
<p>{{ orientation$ | async }}</p>
```
