import {DOCUMENT} from '@angular/common';
import {TestBed} from '@angular/core/testing';
import {WaViewTransitionService} from '@ng-web-apis/view-transition';

window.onbeforeunload = jasmine.createSpy();

describe('WaViewTransitionService', () => {
    describe('not supported provider', () => {
        it('throw error if startViewTransition is not supported', (done) => {
            TestBed.configureTestingModule({
                providers: [
                    WaViewTransitionService,
                    {
                        provide: DOCUMENT,
                        useValue: {querySelectorAll: () => []},
                    },
                ],
            });
            const service = TestBed.inject(WaViewTransitionService);

            const observable = service.startViewTransition(() => {});

            observable.subscribe({
                error: (error) => {
                    expect(error.message).toBe(
                        'startViewTransition is not supported in your browser',
                    );

                    done();
                },
            });
        });
    });

    describe('supported provider', () => {
        let service: WaViewTransitionService;

        const mockDocument = {
            querySelectorAll: () => [],
            startViewTransition: (callback: () => Promise<void> | void) => {
                callback();

                return {
                    updateCallbackDone: Promise.resolve(),
                    finished: Promise.resolve(),
                    ready: Promise.resolve(),
                    skipTransition: () => {},
                };
            },
        } as unknown as Document;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    WaViewTransitionService,
                    {provide: DOCUMENT, useValue: mockDocument},
                ],
            });
            service = TestBed.inject(WaViewTransitionService);
        });

        it('complete the observable when transition finishes', (done) => {
            const observable = service.startViewTransition(() => {});

            observable.subscribe({
                complete: () => {
                    done();
                },
            });
        });

        it('pass ViewTransition object to the observable after callback called', (done) => {
            let callbackCalled = false;
            const observable = service.startViewTransition(() => {
                callbackCalled = true;
            });

            observable.subscribe((viewTransition) => {
                expect(viewTransition).toBeTruthy();
                expect(callbackCalled).toBe(true);

                done();
            });
        });
    });

    describe('custom DOCUMENT provider', () => {
        it('call skipTransition when observable unsubscribed', () => {
            const viewTransitionValue = {
                updateCallbackDone: Promise.resolve(),
                finished: Promise.resolve(),
                ready: Promise.resolve(),
                skipTransition: () => {},
            };
            const mockDocument = {
                querySelectorAll: () => [],
                startViewTransition: (callback: () => Promise<void> | void) => {
                    callback();

                    return viewTransitionValue;
                },
            };

            TestBed.configureTestingModule({
                providers: [
                    WaViewTransitionService,
                    {
                        provide: DOCUMENT,
                        useValue: mockDocument,
                    },
                ],
            });
            const service = TestBed.inject(WaViewTransitionService);

            const skipSpy = spyOn(viewTransitionValue, 'skipTransition');
            const observable = service.startViewTransition(() => {});

            observable.subscribe().unsubscribe();

            expect(skipSpy).toHaveBeenCalled();
        });
    });
});
