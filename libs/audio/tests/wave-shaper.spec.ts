import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioWaveShaper} from '../src/nodes/wave-shaper';

describe('WaveShaper', () => {
    describe('WaveShaperNode', () => {
        @Component({
            standalone: true,
            template: `
                <div waWaveShaperNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioWaveShaper)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof WaveShaperNode).toBe(true);
        });
    });

    describe('WaveShaperNode factory fallback', () => {
        @Component({
            standalone: true,
            template: `
                <div waWaveShaperNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioWaveShaper)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof WaveShaperNode).toBe(true);
        });
    });
});
