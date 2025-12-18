import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TuiIcon, TuiLink, TuiRoot} from '@taiga-ui/core';

@Component({
    selector: 'app',
    imports: [RouterLink, RouterLinkActive, RouterOutlet, TuiIcon, TuiLink, TuiRoot],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
