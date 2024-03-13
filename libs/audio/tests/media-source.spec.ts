import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioMediaSource} from '../src/sources/media-source';

describe('MediaSource', () => {
    describe('MediaElementAudioSourceNode', () => {
        @Component({
            template: `
                <audio waMediaElementAudioSourceNode></audio>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioMediaSource)
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
            expect(testComponent.node instanceof MediaElementAudioSourceNode).toBe(true);
        });
    });

    describe('MediaElementAudioSourceNode factory fallback', () => {
        @Component({
            template: `
                <audio waMediaElementAudioSourceNode></audio>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioMediaSource)
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
            expect(testComponent.node instanceof MediaElementAudioSourceNode).toBe(true);
        });
    });
});
