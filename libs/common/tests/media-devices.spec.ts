import {TestBed} from '@angular/core/testing';
import {WA_MEDIA_DEVICES} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_MEDIA_DEVICES', () => {
    it('injects window.navigator object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_MEDIA_DEVICES)).toBe(window.navigator.mediaDevices);
    });
});
