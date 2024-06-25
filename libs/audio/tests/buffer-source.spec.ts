import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioBufferSource} from '../src/sources/buffer-source';

describe('BufferSource', () => {
    describe('AudioBufferSourceNode', () => {
        @Component({
            template: `
                <div waAudioBufferSourceNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioBufferSource)
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
            expect(testComponent.node instanceof AudioBufferSourceNode).toBe(true);
        });
    });

    describe('AudioBufferSourceNode factory fallback', () => {
        @Component({
            template: `
                <div waAudioBufferSourceNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioBufferSource)
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
            expect(testComponent.node instanceof AudioBufferSourceNode).toBe(true);
        });
    });
});
