import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioStereoPanner} from '../src/nodes/stereo-panner';

describe('StereoPanner', () => {
    describe('StereoPannerNode', () => {
        @Component({
            template: `
                <div waStereoPannerNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioStereoPanner)
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
            expect(testComponent.node instanceof StereoPannerNode).toBe(true);
        });
    });

    describe('StereoPannerNode factory fallback', () => {
        @Component({
            template: `
                <div waStereoPannerNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioStereoPanner)
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
            expect(testComponent.node instanceof StereoPannerNode).toBe(true);
        });
    });
});
