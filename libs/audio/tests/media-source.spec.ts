import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioMediaSource} from '../src/sources/media-source';

describe('MediaSource', () => {
    describe('MediaElementAudioSourceNode', () => {
        @Component({
            standalone: true,
            template: `
                <audio waMediaElementAudioSourceNode></audio>
            `,
        })
        class Test {
            @ViewChild(WebAudioMediaSource)
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
            expect(testComponent.node instanceof MediaElementAudioSourceNode).toBe(true);
        });
    });

    describe('MediaElementAudioSourceNode factory fallback', () => {
        @Component({
            standalone: true,
            template: `
                <audio waMediaElementAudioSourceNode></audio>
            `,
        })
        class Test {
            @ViewChild(WebAudioMediaSource)
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
            expect(testComponent.node instanceof MediaElementAudioSourceNode).toBe(true);
        });
    });
});
