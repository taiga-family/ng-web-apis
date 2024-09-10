import {TestBed} from '@angular/core/testing';
import {CANVAS_PROPERTIES} from '@ng-web-apis/canvas';

window.onbeforeunload = jasmine.createSpy();

describe('CANVAS_PROPERTIES', () => {
    it('is empty by default', () => {
        expect(TestBed.inject(CANVAS_PROPERTIES)).toEqual([]);
    });
});
