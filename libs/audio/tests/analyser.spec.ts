import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaAnalyser, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Analyser', () => {
    describe('AnalyserNode', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waAnalyserNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaAnalyser)
            public node!: WaAnalyser;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({imports: [Test]});

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof AnalyserNode).toBe(true);
        });

        it('emits frequency byte array', (done) => {
            const sub = testComponent.node.frequencyByte.subscribe((array) => {
                sub.unsubscribe();
                expect(array instanceof Uint8Array).toBe(true);

                done();
            });
        });

        it('emits frequency float array', (done) => {
            const sub = testComponent.node.frequencyFloat.subscribe((array) => {
                sub.unsubscribe();
                expect(array instanceof Float32Array).toBe(true);

                done();
            });
        });

        it('emits time byte array', (done) => {
            const sub = testComponent.node.timeByte.subscribe((array) => {
                sub.unsubscribe();
                expect(array instanceof Uint8Array).toBe(true);

                done();
            });
        });

        it('emits time float array', (done) => {
            const sub = testComponent.node.timeFloat.subscribe((array) => {
                sub.unsubscribe();
                expect(array instanceof Float32Array).toBe(true);

                done();
            });
        });
    });

    describe('AnalyserNode factory fallback', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waAnalyserNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaAnalyser)
            public node!: WaAnalyser;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({imports: [Test]});

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof AnalyserNode).toBe(true);
        });
    });
});
