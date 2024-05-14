import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioDynamicsCompressor} from '../src/nodes/dynamics-compressor';

describe('Dynamics compressor', () => {
    describe('DynamicsCompressorNode', () => {
        @Component({
            template: `
                <div waDynamicsCompressorNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioDynamicsCompressor)
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
            expect(testComponent.node instanceof DynamicsCompressorNode).toBe(true);
        });
    });

    describe('DynamicsCompressorNode factory fallback', () => {
        @Component({
            template: `
                <div waDynamicsCompressorNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioDynamicsCompressor)
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
            expect(testComponent.node instanceof DynamicsCompressorNode).toBe(true);
        });
    });
});
