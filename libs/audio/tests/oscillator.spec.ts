import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioOscillator} from '../src/sources/oscillator';

describe('Oscillator', () => {
    describe('OscillatorNode', () => {
        @Component({
            standalone: true,
            template: `
                <div waOscillatorNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioOscillator)
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
            expect(testComponent.node instanceof OscillatorNode).toBe(true);
        });
    });

    describe('OscillatorNode factory fallback', () => {
        @Component({
            standalone: true,
            template: `
                <div waOscillatorNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioOscillator)
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
            expect(testComponent.node instanceof OscillatorNode).toBe(true);
        });
    });
});
