import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';
import {
    INTERSECTION_ROOT,
    INTERSECTION_ROOT_MARGIN,
    INTERSECTION_THRESHOLD,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {take} from 'rxjs';

describe('IntersectionObserverService', () => {
    it('works', done => {
        let called = false;

        const nativeElement = document.createElement('div');

        TestBed.overrideProvider(ElementRef, {
            useValue: {nativeElement},
        })
            .overrideProvider(INTERSECTION_ROOT_MARGIN, {
                useValue: '0px 0px 0px 0px',
            })
            .overrideProvider(INTERSECTION_THRESHOLD, {
                useValue: 0,
            })
            .overrideProvider(INTERSECTION_ROOT, {
                useValue: {
                    nativeElement: document.body,
                },
            })
            .runInInjectionContext(() => {
                const service = new IntersectionObserverService();

                service.pipe(take(1)).subscribe({
                    next: () => {
                        called = true;
                    },
                });

                document.body.appendChild(nativeElement);

                setTimeout(() => {
                    expect(called).toBe(true);
                    done();
                });
            });
    });
});
