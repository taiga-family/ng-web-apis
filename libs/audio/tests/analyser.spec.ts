import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioAnalyser} from '@ng-web-apis/audio';
import {take} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('Analyser', () => {
    describe('AnalyserNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waAnalyserNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioAnalyser)
            public node!: WebAudioAnalyser;
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
        });

        it('creates node', () => {
            expect(testComponent.node instanceof AnalyserNode).toBe(true);
        });

        it('emits frequency byte array', (done) => {
            testComponent.node.frequencyByte$.pipe(take(1)).subscribe((array) => {
                expect(array instanceof Uint8Array).toBe(true);

                done();
            });
        });

        it('emits frequency float array', (done) => {
            testComponent.node.frequencyFloat$.pipe(take(1)).subscribe((array) => {
                expect(array instanceof Float32Array).toBe(true);

                done();
            });
        });

        it('emits time byte array', (done) => {
            testComponent.node.timeByte$.pipe(take(1)).subscribe((array) => {
                expect(array instanceof Uint8Array).toBe(true);

                done();
            });
        });

        it('emits time float array', (done) => {
            testComponent.node.timeFloat$.pipe(take(1)).subscribe((array) => {
                expect(array instanceof Float32Array).toBe(true);

                done();
            });
        });
    });

    describe('AnalyserNode factory fallback', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waAnalyserNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioAnalyser)
            public node!: WebAudioAnalyser;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers,
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof AnalyserNode).toBe(true);
        });
    });
});
