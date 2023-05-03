import {TestBed} from '@angular/core/testing';

import {LOCAL_STORAGE} from '../src/tokens/local-storage';

describe('LOCAL_STORAGE', () => {
    it('injects window.localStorage object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(LOCAL_STORAGE)).toBe(window.localStorage);
    });
});
