import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioOscillator} from '../src/sources/oscillator';

describe('Oscillator', () => {
    describe('OscillatorNode', () => {
        @Component({
            template: `
                <div waOscillatorNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioOscillator)
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
            expect(testComponent.node instanceof OscillatorNode).toBe(true);
        });
    });

    describe('OscillatorNode factory fallback', () => {
        @Component({
            template: `
                <div waOscillatorNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioOscillator)
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
            expect(testComponent.node instanceof OscillatorNode).toBe(true);
        });
    });
});
