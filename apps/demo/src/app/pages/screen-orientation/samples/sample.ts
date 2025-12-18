export const SAMPLE_TS = `import {WaScreenOrientationService} from '@ng-web-apis/screen-orientation';

// ...
export class Example {
  constructor(readonly orientation$: WaScreenOrientationService) {}
}`;

export const SAMPLE_HTML = '<p>{{ orientation$ | async }}</p>';
