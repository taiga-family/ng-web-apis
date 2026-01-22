import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {catchError} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('ResizeObserver', () => {
    describe('Resize Observer token', () => {
        let service: WaResizeObserverService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    WaResizeObserverService,
                    {
                        provide: ElementRef,
                        useValue: {nativeElement: document.createElement('DIV')},
                    },
                ],
            });

            service = TestBed.inject(WaResizeObserverService).pipe(
                catchError((_err, caught) => caught),
            );
        });

        it('defined', () => {
            expect(service).toBeDefined();
        });

        it('disconnect', () => {
            service.subscribe().unsubscribe();

            expect(service).toBeDefined();
        });
    });
});
