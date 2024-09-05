import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioStereoPanner} from '../src/nodes/stereo-panner';

describe('StereoPanner', () => {
    describe('StereoPannerNode', () => {
        @Component({
            standalone: true,
            template: `
                <div waStereoPannerNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioStereoPanner)
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
            expect(testComponent.node instanceof StereoPannerNode).toBe(true);
        });
    });

    describe('StereoPannerNode factory fallback', () => {
        @Component({
            standalone: true,
            template: `
                <div waStereoPannerNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioStereoPanner)
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
            expect(testComponent.node instanceof StereoPannerNode).toBe(true);
        });
    });
});
