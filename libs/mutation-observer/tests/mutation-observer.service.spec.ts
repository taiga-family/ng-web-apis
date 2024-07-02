import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {first} from 'rxjs';

describe('MutationObserver service', () => {
    it('works', (done) => {
        const element = document.createElement('DIV');
        const elementRef = new ElementRef(element);

        TestBed.overrideProvider(MUTATION_OBSERVER_INIT, {
            useValue: {
                attributeFilter: ['title'],
            },
        })
            .overrideProvider(ElementRef, {
                useValue: elementRef,
            })
            .runInInjectionContext(() => {
                const service = new MutationObserverService();

                let flag = false;

                document.body.appendChild(element);
                service.pipe(first()).subscribe(() => {
                    flag = true;
                });

                element.setAttribute('title', 'test');

                setTimeout(() => {
                    expect(flag).toBe(true);
                    done();
                }, 50);
            });
    });
});
