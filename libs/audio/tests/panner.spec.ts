import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioPanner} from '../src/nodes/panner';

describe('Panner', () => {
    describe('PannerNode', () => {
        @Component({
            standalone: true,
            template: `
                <div waPannerNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioPanner)
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
            expect(testComponent.node instanceof PannerNode).toBe(true);
        });
    });

    describe('PannerNode factory fallback', () => {
        @Component({
            standalone: true,
            template: `
                <div waPannerNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioPanner)
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
            expect(testComponent.node instanceof PannerNode).toBe(true);
        });
    });
});
