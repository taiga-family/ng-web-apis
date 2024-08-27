import {TestBed} from '@angular/core/testing';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';

import {UNIVERSAL_LOCAL_STORAGE} from '../src/constants/universal-local-storage';

describe('UNIVERSAL_LOCAL_STORAGE', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UNIVERSAL_LOCAL_STORAGE],
        });
    });

    it('sets and retrieves item', () => {
        const localStorage = TestBed.inject(WA_LOCAL_STORAGE);

        localStorage.setItem('test', 'value');

        expect(localStorage.getItem('test')).toBe('value');
        expect(localStorage.length).toBe(1);
        expect(localStorage.key(0)).toBe('test');
    });

    it('removes item', () => {
        const localStorage = TestBed.inject(WA_LOCAL_STORAGE);

        localStorage.setItem('test', 'value');
        localStorage.removeItem('test');

        expect(localStorage.getItem('test')).toBeNull();
        expect(localStorage.length).toBe(0);
        expect(localStorage.key(0)).toBeNull();
    });

    it('clears storage', () => {
        const localStorage = TestBed.inject(WA_LOCAL_STORAGE);

        localStorage.setItem('test1', 'value1');
        localStorage.setItem('test2', 'value2');

        expect(localStorage.length).toBe(2);

        localStorage.clear();

        expect(localStorage.length).toBe(0);
    });
});
