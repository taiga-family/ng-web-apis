import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaMutationObserver} from '@ng-web-apis/mutation-observer';

window.onbeforeunload = jasmine.createSpy();

describe('MutationObserverDirective', () => {
    @Component({
        imports: [WaMutationObserver],
        template: `
            @if (observe) {
                <section
                    childList
                    (waMutationObserver)="onMutation()"
                >
                    Content
                    @if (child) {
                        <div
                            attributeFilter="title"
                            [attr.aria-label]="label"
                            [title]="title"
                            (waMutationObserver)="onAttributes()"
                        >
                            Child
                        </div>
                    }
                </section>
            }
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public onMutation = jasmine.createSpy('onMutation');

        public onAttributes = jasmine.createSpy('onAttributes');
        public observe = true;
        public child = true;
        public title = 'title';
        public label = 'label';
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [Test],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();

        setTimeout(() => {
            testComponent.onMutation.calls.reset();
            testComponent.onAttributes.calls.reset();
            done();
        }, 100);
    });

    afterAll(() => {
        testComponent.observe = false;
        fixture.detectChanges();
    });

    it('emits mutations', (done) => {
        testComponent.child = false;
        fixture.detectChanges();

        setTimeout(() => {
            expect(testComponent.onMutation).toHaveBeenCalled();

            done();
        }, 100);
    });

    it('watches attributes', (done) => {
        testComponent.onAttributes.calls.reset();
        testComponent.title = 'test';
        fixture.detectChanges();

        setTimeout(() => {
            expect(testComponent.onAttributes).toHaveBeenCalled();

            done();
        }, 100);
    });

    it('ignores unwatched attributes', (done) => {
        testComponent.label = 'test';
        fixture.detectChanges();

        setTimeout(() => {
            expect(testComponent.onAttributes).not.toHaveBeenCalled();

            done();
        }, 100);
    });
});
