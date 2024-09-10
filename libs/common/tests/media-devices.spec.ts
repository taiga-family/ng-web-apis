import {TestBed} from '@angular/core/testing';
import {MEDIA_DEVICES} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('MEDIA_DEVICES', () => {
    it('injects window.navigator object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(MEDIA_DEVICES)).toBe(window.navigator.mediaDevices);
    });
});
