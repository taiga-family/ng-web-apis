import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MarkdownModule} from 'ngx-markdown';

@Component({
    selector: 'common-page',
    imports: [CommonModule, MarkdownModule],
    templateUrl: './common-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommonPage {
    protected readonly readme =
        import('../../../../../../libs/common/README.md?raw').then((a) =>
            a.default.replace('![logo](logo.svg) ', ''),
        ) as any as Promise<string>;
}
