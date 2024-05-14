import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioWaveShaper} from '../src/nodes/wave-shaper';

describe('WaveShaper', () => {
    describe('WaveShaperNode', () => {
        @Component({
            template: `
                <div waWaveShaperNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioWaveShaper)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof WaveShaperNode).toBe(true);
        });
    });

    describe('WaveShaperNode factory fallback', () => {
        @Component({
            template: `
                <div waWaveShaperNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioWaveShaper)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof WaveShaperNode).toBe(true);
        });
    });
});
