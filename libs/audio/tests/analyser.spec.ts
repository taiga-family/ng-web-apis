import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {WaWebAudio, WebAudioAnalyser} from '@ng-web-apis/audio';
import {take} from 'rxjs';

import {providers} from '../src/constants/fallback';

describe('Analyser', () => {
    describe('AnalyserNode', () => {
        @Component({
            template: `
                <div waAnalyserNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioAnalyser)
            public node!: WebAudioAnalyser;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
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
            template: `
                <div waAnalyserNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioAnalyser)
            public node!: WebAudioAnalyser;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
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
