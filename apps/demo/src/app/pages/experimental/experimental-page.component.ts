import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MarkdownModule} from 'ngx-markdown';

@Component({
    selector: 'experimental-page',
    imports: [CommonModule, MarkdownModule],
    templateUrl: './experimental-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommonPage {
    protected readonly readme =
        import('../../../../../../libs/experimental/README.md').then((a) =>
            a.default.replace('![logo](logo.svg) ', ''),
        ) as any as Promise<string>;
}
