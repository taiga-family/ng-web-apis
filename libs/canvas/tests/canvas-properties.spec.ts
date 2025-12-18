import {TestBed} from '@angular/core/testing';
import {WA_CANVAS_PROPERTIES} from '@ng-web-apis/canvas';

window.onbeforeunload = jasmine.createSpy();

describe('WA_CANVAS_PROPERTIES', () => {
    it('is empty by default', () => {
        expect(TestBed.inject(WA_CANVAS_PROPERTIES)).toEqual([]);
    });
});
