import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {catchError} from 'rxjs/operators';

import {ResizeObserverService} from '../src/services/resize-observer.service';

describe(`ResizeObserver`, () => {
    describe(`Resize Observer token`, () => {
        let service: ResizeObserverService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    ResizeObserverService,
                    {
                        provide: ElementRef,
                        useValue: {
                            nativeElement: document.createElement(`DIV`),
                        },
                    },
                ],
            });

            service = TestBed.inject(ResizeObserverService).pipe(
                catchError((_err, caught) => caught),
            );
        });

        it(`defined`, () => {
            expect(service).toBeDefined();
        });

        it(`disconnect`, () => {
            service.subscribe().unsubscribe();
            expect(service).toBeDefined();
        });
    });
});
