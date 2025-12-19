import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {
    WA_FEEDBACK_COEFFICIENTS,
    WA_FEEDFORWARD_COEFFICIENTS,
    WaIIRFilter,
    WaWebAudio,
} from '@ng-web-apis/audio';
import {CONSTRUCTOR_SUPPORT} from '@ng-web-apis/audio/tokens/constructor-support';

window.onbeforeunload = jasmine.createSpy();

describe('IIR filter', () => {
    describe('IIRFilterNode', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waIIRFilterNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaIIRFilter)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    {
                        provide: WA_FEEDFORWARD_COEFFICIENTS,
                        useValue: [1],
                    },
                    {
                        provide: WA_FEEDBACK_COEFFICIENTS,
                        useValue: [1],
                    },
                ],
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof IIRFilterNode).toBe(true);
        });
    });

    describe('IIRFilterNode factory fallback', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waIIRFilterNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaIIRFilter)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    {
                        provide: WA_FEEDFORWARD_COEFFICIENTS,
                        useValue: [1],
                    },
                    {
                        provide: WA_FEEDBACK_COEFFICIENTS,
                        useValue: [1],
                    },
                    {
                        provide: CONSTRUCTOR_SUPPORT,
                        useValue: false,
                    },
                ],
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof IIRFilterNode).toBe(true);
        });
    });
});
