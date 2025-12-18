import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';

window.onbeforeunload = jasmine.createSpy();

describe('WaResizeObserver', () => {
    @Component({
        imports: [WaResizeObserver],
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
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public onResize = jasmine.createSpy('onResize');
        public observe = true;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Test],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        testComponent.onResize.calls.reset();
    });

    it('emits resizes', (done) => {
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
