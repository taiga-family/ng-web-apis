import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioBiquadFilter} from '../src/nodes/biquad-filter';

describe('BiquadFilter', () => {
    describe('BiquadFilterNode', () => {
        @Component({
            template: `
                <div waBiquadFilterNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioBiquadFilter)
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
            expect(testComponent.node instanceof BiquadFilterNode).toBe(true);
        });
    });

    describe('BiquadFilterNode factory fallback', () => {
        @Component({
            template: `
                <div waBiquadFilterNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioBiquadFilter)
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
            expect(testComponent.node instanceof BiquadFilterNode).toBe(true);
        });
    });
});
