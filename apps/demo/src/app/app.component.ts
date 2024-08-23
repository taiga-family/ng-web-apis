import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { TuiRoot, TuiIcon, TuiLink } from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app',
    imports: [
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        TuiLink,
        TuiRoot,
        TuiIcon,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
