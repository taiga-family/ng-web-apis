import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TuiLinkModule, TuiRootModule, TuiSvgModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app',
    imports: [
        TuiRootModule,
        RouterLink,
        RouterLinkActive,
        TuiLinkModule,
        TuiSvgModule,
        RouterOutlet,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
