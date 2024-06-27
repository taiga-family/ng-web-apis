# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/workers/logo.svg) Web Workers API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/workers.svg)](https://npmjs.com/package/@ng-web-apis/workers)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/workers)](https://bundlephobia.com/result?p=@ng-web-apis/workers)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=workers)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/workers)

This is a library for comfortable use of
[Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/taiga-family/ng-web-apis/tree/main/libs/common):

```bash
npm i @ng-web-apis/common
```

Now install the package:

```bash
npm i @ng-web-apis/workers
```

## How it use

Create a worker and use it in a template with `AsyncPipe`:

```ts
import {WebWorker} from '@ng-web-apis/workers';

function compute(data: number): number {
  return data ** 2;
}

@Component({
  template: `
    Computed Result:
    <ng-container *ngIf="worker | async as event">{{ event.data }}</ng-container>
    <form (ngSubmit)="worker.postMessage(input.value)">
      <input #input />
      <button type="submit">Send to worker</button>
    </form>
  `,
})
class My {
  readonly worker = WebWorker.fromFunction<number, number>(compute);
}
```

To get data from the worker event, use the toData operator

```ts
import {toData, WebWorker} from '@ng-web-apis/workers';

function compute(data: number): number {
  return data ** 2;
}

@Component({
  template: `
    Computed Result: {{ workerData$ | async }}
    <form (ngSubmit)="worker.postMessage(input.value)">
      <input #input />
      <button type="submit">Send to worker</button>
    </form>
  `,
})
class My {
  readonly worker = WebWorker.fromFunction<number, number>(compute);
  readonly workerData$ = this.worker.pipe(toData());
}
```

It's the same with `WorkerPipe` only:

```ts
import {WorkerModule} from '@ng-web-apis/workers';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [WorkerModule],
  declarations: [My],
})
class SomeModule {}
```

```ts
import {WorkerExecutor, WebWorker} from '@ng-web-apis/workers';
import {FormControl} from '@angular/forms';

@Component({
  template: `
    Computed Result: {{ value | waWorker: changeData | async }}

    <input [(ngModel)]="value" />
  `,
})
class My {
  value: string;

  changeData(data: string): string {
    return `${data} (changed)`;
  }
}
```

## See also

Other [Web APIs for Angular](https://taiga-family.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/taiga-family/ng-web-apis)
