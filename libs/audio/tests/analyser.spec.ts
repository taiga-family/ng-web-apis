import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WebAudioAnalyser, WebAudioModule} from '@ng-web-apis/audio';
import {take} from 'rxjs';

import {providers} from '../src/constants/fallback';

describe('Analyser', () => {
    describe('AnalyserNode', () => {
        @Component({
            template: `
                <div waAnalyserNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioAnalyser)
            public node!: WebAudioAnalyser;
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WebAudioModule],
                declarations: [TestComponent],
            });

            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof AnalyserNode).toBe(true);
        });

        it('emits frequency byte array', done => {
            testComponent.node.frequencyByte$.pipe(take(1)).subscribe(array => {
                expect(array instanceof Uint8Array).toBe(true);
                done();
            });
        });

        it('emits frequency float array', done => {
            testComponent.node.frequencyFloat$.pipe(take(1)).subscribe(array => {
                expect(array instanceof Float32Array).toBe(true);
                done();
            });
        });

        it('emits time byte array', done => {
            testComponent.node.timeByte$.pipe(take(1)).subscribe(array => {
                expect(array instanceof Uint8Array).toBe(true);
                done();
            });
        });

        it('emits time float array', done => {
            testComponent.node.timeFloat$.pipe(take(1)).subscribe(array => {
                expect(array instanceof Float32Array).toBe(true);
                done();
            });
        });
    });

    describe('AnalyserNode factory fallback', () => {
        @Component({
            template: `
                <div waAnalyserNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioAnalyser)
            public node!: WebAudioAnalyser;
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WebAudioModule],
                declarations: [TestComponent],
                providers,
            });

            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof AnalyserNode).toBe(true);
        });
    });
});
