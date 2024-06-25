import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MarkdownModule} from 'ngx-markdown';

@Component({
    standalone: true,
    selector: 'universal-page',
    imports: [CommonModule, MarkdownModule],
    templateUrl: './universal-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UniversalPage {
    protected readonly readme = import(
        '../../../../../../libs/universal/README.md?raw'
    ).then(a => a.default.replace('![logo](logo.svg) ', '')) as any as Promise<string>;
}
