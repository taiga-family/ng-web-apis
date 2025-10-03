import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {MarkdownModule} from 'ngx-markdown';

@Component({
    standalone: true,
    selector: 'platform-page',
    imports: [CommonModule, MarkdownModule],
    templateUrl: './index.html',
    styles: '.example {max-inline-size: 50rem; margin: 2rem auto }',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommonPage {
    protected readonly isIos = inject(WA_IS_IOS);

    protected readonly readme = import(
        '../../../../../../libs/platform/README.md?raw'
    ).then((a) => a.default.replace('![logo](logo.svg) ', '')) as any as Promise<string>;
}
