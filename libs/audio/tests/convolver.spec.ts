import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioConvolver} from '../src/nodes/convolver';

describe('Convolver', () => {
    describe('ConvolverNode', () => {
        @Component({
            template: `
                <div
                    buffer="base/demo.mp3"
                    waConvolverNode
                ></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioConvolver)
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
            expect(testComponent.node instanceof ConvolverNode).toBe(true);
        });
    });

    describe('ConvolverNode factory fallback', () => {
        @Component({
            template: `
                <div
                    buffer="base/demo.mp3"
                    waConvolverNode
                ></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioConvolver)
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
            expect(testComponent.node instanceof ConvolverNode).toBe(true);
        });
    });
});
