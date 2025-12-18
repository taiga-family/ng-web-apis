import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {first} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('MutationObserver service', () => {
    it('works', (done) => {
        const element = document.createElement('DIV');
        const elementRef = new ElementRef(element);

        TestBed.overrideProvider(WA_MUTATION_OBSERVER_INIT, {
            useValue: {
                attributeFilter: ['title'],
            },
        })
            .overrideProvider(ElementRef, {
                useValue: elementRef,
            })
            .runInInjectionContext(() => {
                const service = new WaMutationObserverService();

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
