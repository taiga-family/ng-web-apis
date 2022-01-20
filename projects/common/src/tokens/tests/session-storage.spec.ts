import {TestBed} from '@angular/core/testing';

import {SESSION_STORAGE} from '../session-storage';

describe('SESSION_STORAGE', () => {
    it('injects window.sessionStorage object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(SESSION_STORAGE)).toBe(window.sessionStorage);
    });
});
