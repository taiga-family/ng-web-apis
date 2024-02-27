import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {PermissionsService} from '@ng-web-apis/permissions';
import {HighlightModule} from 'ngx-highlightjs';
import {BehaviorSubject, catchError, of, tap} from 'rxjs';

import {SAMPLE} from './samples/basic';

@Component({
    standalone: true,
    selector: 'permissions-page',
    imports: [CommonModule, HighlightModule],
    templateUrl: './permissions-page.component.html',
    styleUrls: ['./permissions-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PermissionsPageComponent {
    private readonly navigator: Navigator = inject(NAVIGATOR);

    protected error$ = new BehaviorSubject<string | null>(null);
    protected basicSample = SAMPLE;

    protected geolocationState$ = inject(PermissionsService)
        .state('geolocation')
        .pipe(
            tap(state => {
                if (state === 'prompt') {
                    // eslint-disable-next-line no-alert
                    alert(
                        'After you acknowledge this message the browser will ask your permission to allow location access!',
                    );
                    // calling getCurrentPosition() results in a browser asking for permission if the current status is "prompt"
                    this.navigator.geolocation.getCurrentPosition(() => {});
                }
            }),
            catchError((error: Error) => {
                this.error$.next(error.message);

                return of(null);
            }),
        );
}
