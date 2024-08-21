import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {catchError} from 'rxjs';

describe('ResizeObserver', () => {
    describe('Resize Observer token', () => {
        let service: ResizeObserverService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    ResizeObserverService,
                    {
                        provide: ElementRef,
                        useValue: {
                            nativeElement: document.createElement('DIV'),
                        },
                    },
                ],
            });

            service = TestBed.inject(ResizeObserverService).pipe(
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
