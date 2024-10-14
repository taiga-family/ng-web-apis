import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MarkdownModule} from 'ngx-markdown';

@Component({
    standalone: true,
    selector: 'platform-page',
    imports: [CommonModule, MarkdownModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommonPage {
    protected readonly readme = import(
        '../../../../../../libs/platform/README.md?raw'
    ).then((a) => a.default.replace('![logo](logo.svg) ', '')) as any as Promise<string>;
}
