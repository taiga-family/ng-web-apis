import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioBufferSource} from '../src/sources/buffer-source';

describe('BufferSource', () => {
    describe('AudioBufferSourceNode', () => {
        @Component({
            template: `
                <div waAudioBufferSourceNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioBufferSource)
            node!: AudioNode;
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
            expect(testComponent.node instanceof AudioBufferSourceNode).toBe(true);
        });
    });

    describe('AudioBufferSourceNode factory fallback', () => {
        @Component({
            template: `
                <div waAudioBufferSourceNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioBufferSource)
            node!: AudioNode;
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
            expect(testComponent.node instanceof AudioBufferSourceNode).toBe(true);
        });
    });
});
