import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'common-page',
    templateUrl: './storage-page.component.html',
    styleUrls: ['./storage-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoragePageComponent {
    readonly example = {
        TypeScript: import('./example/example.component.ts?raw'),
        HTML: import('./example/example.template.html?raw'),
    };
}
