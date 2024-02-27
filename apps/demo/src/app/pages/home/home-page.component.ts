import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoPath} from '@demo/constants';
import {WEB_AUDIO_SUPPORT} from '@ng-web-apis/audio';
import {GEOLOCATION_SUPPORT} from '@ng-web-apis/geolocation';
import {INTERSECTION_OBSERVER_SUPPORT} from '@ng-web-apis/intersection-observer';
import {MIDI_SUPPORT} from '@ng-web-apis/midi';
import {NOTIFICATION_SUPPORT} from '@ng-web-apis/notification';
import {PAYMENT_REQUEST_SUPPORT} from '@ng-web-apis/payment-request';
import {PERMISSIONS_SUPPORT} from '@ng-web-apis/permissions';
import {RESIZE_OBSERVER_SUPPORT} from '@ng-web-apis/resize-observer';

@Component({
    standalone: true,
    selector: 'home-page',
    imports: [RouterLink],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
    readonly link = DemoPath;
    readonly paymentRequestSupport = inject(PAYMENT_REQUEST_SUPPORT);
    readonly geolocationSupport = inject(GEOLOCATION_SUPPORT);
    readonly intersectionSupport = inject(INTERSECTION_OBSERVER_SUPPORT);
    readonly resizeSupport = inject(RESIZE_OBSERVER_SUPPORT);
    readonly midiSupport = inject(MIDI_SUPPORT);
    readonly audioSupport = inject(WEB_AUDIO_SUPPORT);
    readonly permissionsSupport = inject(PERMISSIONS_SUPPORT);
    readonly notificationSupport = inject(NOTIFICATION_SUPPORT);
}
