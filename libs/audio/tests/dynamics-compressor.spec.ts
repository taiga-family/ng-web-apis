import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioDynamicsCompressor} from '../src/nodes/dynamics-compressor';

describe('Dynamics compressor', () => {
    describe('DynamicsCompressorNode', () => {
        @Component({
            template: `
                <div waDynamicsCompressorNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioDynamicsCompressor)
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
            expect(testComponent.node instanceof DynamicsCompressorNode).toBe(true);
        });
    });

    describe('DynamicsCompressorNode factory fallback', () => {
        @Component({
            template: `
                <div waDynamicsCompressorNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioDynamicsCompressor)
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
            expect(testComponent.node instanceof DynamicsCompressorNode).toBe(true);
        });
    });
});
