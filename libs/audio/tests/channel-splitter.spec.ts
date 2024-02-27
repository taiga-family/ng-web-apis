import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioChannelSplitter} from '../src/nodes/channel-splitter';

describe('ChannelSplitter', () => {
    describe('ChannelSplitterNode', () => {
        @Component({
            template: `
                <div waChannelSplitterNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioChannelSplitter)
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
            expect(testComponent.node instanceof ChannelSplitterNode).toBe(true);
        });
    });

    describe('ChannelSplitterNode with providers', () => {
        @Component({
            template: `
                <div waChannelSplitterNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioChannelSplitter)
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
            expect(testComponent.node instanceof ChannelSplitterNode).toBe(true);
        });
    });
});
