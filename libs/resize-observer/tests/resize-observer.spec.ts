import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {ResizeObserverDirective} from '@ng-web-apis/resize-observer';

describe('ResizeObserverDirective', () => {
    @Component({
        template: `
            <section style="position: relative; height: 200px; overflow: auto;">
                <h1
                    id="resize_elem"
                    style="position: absolute; top: 200px; height: 200px;"
                    (waResizeObserver)="onResize($event)"
                >
                    I'm being observed
                </h1>
            </section>
        `,
    })
    class TestComponent {
        // eslint-disable-next-line jest/no-jasmine-globals
        public onResize = jasmine.createSpy('onResize');
        public observe = true;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ResizeObserverDirective],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        testComponent.onResize.calls.reset();
    });

    it('Emits resizes', done => {
        document.querySelector('#resize_elem')!.scrollTop = 350;
        fixture.detectChanges();

        setTimeout(() => {
            expect(testComponent.onResize).toHaveBeenCalled();
            testComponent.observe = false;
            fixture.detectChanges();
            done();
        }, 100);
    });
});
