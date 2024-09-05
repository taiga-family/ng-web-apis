import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioConvolver} from '../src/nodes/convolver';

describe('Convolver', () => {
    describe('ConvolverNode', () => {
        @Component({
            standalone: true,
            template: `
                <div
                    buffer="base/demo.mp3"
                    waConvolverNode
                ></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioConvolver)
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
            expect(testComponent.node instanceof ConvolverNode).toBe(true);
        });
    });

    describe('ConvolverNode factory fallback', () => {
        @Component({
            standalone: true,
            template: `
                <div
                    buffer="base/demo.mp3"
                    waConvolverNode
                ></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioConvolver)
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
            expect(testComponent.node instanceof ConvolverNode).toBe(true);
        });
    });
});
