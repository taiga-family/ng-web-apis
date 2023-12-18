export const SAMPLE_TS = `import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';

// ...
export class MyComponent {
  constructor(readonly orientation$: ScreenOrientationService) {}
}`;

export const SAMPLE_HTML = '<p>{{ orientation$ | async }}</p>';
