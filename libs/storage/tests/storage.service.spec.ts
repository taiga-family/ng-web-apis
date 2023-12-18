import {TestBed} from '@angular/core/testing';
import {filterByKey, STORAGE_EVENT, StorageService, toValue} from '@ng-web-apis/storage';
import {first, Observable} from 'rxjs';

describe('StorageService', () => {
    let event$: Observable<StorageEvent>;
    let service: StorageService;
    let result: any;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        event$ = TestBed.inject(STORAGE_EVENT);
        service = TestBed.inject(StorageService);
        result = '';
    });

    afterAll(() => {
        localStorage.clear();
    });

    it('notifies STORAGE_EVENT upon addition', done => {
        event$.pipe(first(), filterByKey('value'), toValue()).subscribe(value => {
            result = value;
            done();
        });

        service.setItem('value', 'value');

        expect(result).toBe('value');
    });

    it('notifies STORAGE_EVENT upon removal', done => {
        localStorage.setItem('value', 'value');
        event$.pipe(first(), filterByKey('value'), toValue()).subscribe(value => {
            result = value;
            done();
        });

        service.removeItem('value');

        expect(result).toBeNull();
    });

    it('notifies STORAGE_EVENT upon clearing', done => {
        localStorage.setItem('value', 'value');
        event$.pipe(first(), filterByKey('value'), toValue()).subscribe(value => {
            result = value;
            done();
        });

        service.clear();

        expect(result).toBeNull();
    });

    it('ignores other keys', done => {
        event$.pipe(first(), filterByKey('value'), toValue()).subscribe({
            next: value => {
                result = value;
            },
            complete: done,
        });

        service.setItem('wrong', 'value');

        expect(result).toBe('');
    });

    it('counts length', () => {
        service.setItem('value', 'value');
        service.setItem('wrong', 'value');

        expect(service.length).toBe(2);
    });

    it('gets key', () => {
        service.setItem('value', 'value');
        service.setItem('wrong', 'value');

        expect(service.key(1)).toBe('wrong');
    });
});
