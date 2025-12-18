import {TestBed} from '@angular/core/testing';
import {
    filterByKey,
    toValue,
    WA_STORAGE_EVENT,
    WaStorageService,
} from '@ng-web-apis/storage';
import {first, type Observable} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('WaStorageService', () => {
    let event$: Observable<StorageEvent>;
    let service: WaStorageService;
    let result: any;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        event$ = TestBed.inject(WA_STORAGE_EVENT);
        service = TestBed.inject(WaStorageService);
        result = '';
    });

    afterAll(() => {
        localStorage.clear();
    });

    it('notifies WA_STORAGE_EVENT upon addition', (done) => {
        event$.pipe(first(), filterByKey('value'), toValue()).subscribe((value) => {
            result = value;
            done();
        });

        service.setItem('value', 'value');

        expect(result).toBe('value');
    });

    it('notifies WA_STORAGE_EVENT upon removal', (done) => {
        localStorage.setItem('value', 'value');
        event$.pipe(first(), filterByKey('value'), toValue()).subscribe((value) => {
            result = value;
            done();
        });

        service.removeItem('value');

        expect(result).toBeNull();
    });

    it('notifies WA_STORAGE_EVENT upon clearing', (done) => {
        localStorage.setItem('value', 'value');
        event$.pipe(first(), filterByKey('value'), toValue()).subscribe((value) => {
            result = value;
            done();
        });

        service.clear();

        expect(result).toBeNull();
    });

    it('ignores other keys', (done) => {
        event$.pipe(first(), filterByKey('value'), toValue()).subscribe({
            next: (value) => {
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
