import {ElementRef} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {first} from 'rxjs';

describe('MutationObserver service', () => {
    it('works', done => {
        const element = document.createElement('DIV');
        const elementRef = new ElementRef(element);
        const service = new MutationObserverService(elementRef, {
            attributeFilter: ['title'],
        });

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
