import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoPath} from '@demo/constants';
import {WA_WEB_AUDIO_SUPPORT} from '@ng-web-apis/audio';
import {WA_GEOLOCATION_SUPPORT} from '@ng-web-apis/geolocation';
import {WA_INTERSECTION_OBSERVER_SUPPORT} from '@ng-web-apis/intersection-observer';
import {WA_MIDI_SUPPORT} from '@ng-web-apis/midi';
import {WA_NOTIFICATION_SUPPORT} from '@ng-web-apis/notification';
import {WA_PAYMENT_REQUEST_SUPPORT} from '@ng-web-apis/payment-request';
import {WA_PERMISSIONS_SUPPORT} from '@ng-web-apis/permissions';
import {WA_RESIZE_OBSERVER_SUPPORT} from '@ng-web-apis/resize-observer';

@Component({
    selector: 'home-page',
    imports: [RouterLink],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {
    protected readonly link = DemoPath;
    protected readonly paymentRequestSupport = inject(WA_PAYMENT_REQUEST_SUPPORT);
    protected readonly geolocationSupport = inject(WA_GEOLOCATION_SUPPORT);
    protected readonly intersectionSupport = inject(WA_INTERSECTION_OBSERVER_SUPPORT);
    protected readonly resizeSupport = inject(WA_RESIZE_OBSERVER_SUPPORT);
    protected readonly midiSupport = inject(WA_MIDI_SUPPORT);
    protected readonly audioSupport = inject(WA_WEB_AUDIO_SUPPORT);
    protected readonly permissionsSupport = inject(WA_PERMISSIONS_SUPPORT);
    protected readonly notificationSupport = inject(WA_NOTIFICATION_SUPPORT);
}
